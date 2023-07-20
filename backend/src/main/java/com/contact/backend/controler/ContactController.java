package com.contact.backend.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.contact.backend.module.Contact;
import com.contact.backend.repository.ContactRepository;

@RestController
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/contact/")
    public Contact create(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    @GetMapping("/contact/")
    public Iterable<Contact> returnAll() {
        return contactRepository.findAll();
    }

    @PutMapping("/contact/")
    public Contact update(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    @DeleteMapping("/contact/{id}")
    public void remove(@PathVariable long id) {
        contactRepository.deleteById(id);
    }

    @GetMapping("/contact/{id}")
    public Contact findById(@PathVariable long id) {
        return contactRepository.findById(id).get();
    }

}
