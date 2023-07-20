package com.contact.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.contact.backend.module.User;

@Repository
public interface UserRpository extends CrudRepository<User, Long> {

}
