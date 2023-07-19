package com.contact.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.contact.backend.module.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

}
