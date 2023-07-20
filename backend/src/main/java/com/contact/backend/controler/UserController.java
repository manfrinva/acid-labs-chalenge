package com.contact.backend.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.contact.backend.Utils.StringEncryptor;
import com.contact.backend.module.Auth;
import com.contact.backend.module.User;
import com.contact.backend.repository.UserRpository;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

  @Autowired
  private UserRpository userRpository;

  @PostMapping("/user/")
  public User create(@RequestBody User user) {
    user.setPassword(StringEncryptor.encryptString(user.getNome(), user.getPassword()));
    return userRpository.save(user);
  }

  @GetMapping("/user/")
  public Iterable<User> returnAll() {
    return userRpository.findAll();
  }

  @PutMapping("/user/")
  public User update(@RequestBody User user) {
    user.setPassword(StringEncryptor.encryptString(user.getNome(), user.getPassword()));
    return userRpository.save(user);
  }

  @DeleteMapping("/user/{id}")
  public void remove(@PathVariable long id) {
    userRpository.deleteById(id);
  }

  @GetMapping("/user/{id}")
  public User findById(@PathVariable long id) {
    return userRpository.findById(id).get();
  }

  @PatchMapping("/user/validation/")
  public boolean validation(@RequestBody Auth credentials) {
    User user = userRpository.findById(credentials.getId()).get();
    if (user != null) {
      if (user.getPassword().equals(StringEncryptor.encryptString(user.getNome(), credentials.getPassword()))) {
        return true;
      }
    }
    return false;
  }
}
