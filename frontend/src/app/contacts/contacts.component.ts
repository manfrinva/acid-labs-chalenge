import { Contact } from './../models/Contact';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],


})
export class ContactsComponent {

  bnt:boolean = false;

  //contact Object
  contact: Contact = new Contact();

  //Contacts JSON
  contacts:Contact[] = [];

  constructor(private service:ContactService){}

  //Selection method
  selectAllContact():void{
    this.service.selectAll()
    .subscribe(retorno => this.contacts = retorno);
  }

  //Inicialization method
  ngOnInit(){
    this.selectAllContact();
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  selectContactById(id:Number){
    this.service.selectById(id)
    .subscribe(retorno => //this.contact = retorno);
      {
        this.contact = retorno;
        console.log(retorno);
      });
  }

  createContact():void{
      this.service.createContact(this.contact)
      .subscribe(retorno => {
        this.contacts.push(retorno);
        this.contact = new Contact();
      });
  }

  updateContact(edit: Contact){
    //this.selectContactById(id);

  }

  deleteContact(id: Number){}



  editOrCreatContact(i: Number){
    const newName = document.getElementById('name') as HTMLInputElement;
    const newPhone = document.getElementById('phone') as HTMLInputElement;
    const table = document.getElementById('tbl') as HTMLInputElement;
    table.style.visibility = "hidden";
    this.bnt = true;

    alert('Contact saved!');
    this.contact = new Contact();
    table.style.visibility = "visable";
  }

  editContact(c: Contact){
    this.service.updateContact(this.contact)
        .subscribe(retorno => {
        let id = this.contacts.findIndex(obj => {
          return obj.id == retorno.id;
        });
        this.contacts[id] = retorno;
      });
  }
/*
  selectContact(i:number):void{
    const newName = document.getElementById('name') as HTMLInputElement;
    const newPhone = document.getElementById('phone') as HTMLInputElement;
    const table = document.getElementById('tbl') as HTMLInputElement;
    table.style.visibility = "hidden"
    newName.value = this.contacts[i].nome;
    newPhone.value = this.contacts[i].telefone;
  }
/*
  editContact(i:number):void{
    this.selectContact(i);

    this.service.updateContact(this.contact)
    .subscribe(retorno => {
      let id = this.contacts.findIndex(obj => {
        return obj.id == retorno.id;
      });
      this.contacts[id] = retorno;

      this.contact = new Contact();
      alert('Contact saved!');
    });

  }
*/

}
