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
  showButton:boolean = false;

  contact: Contact = new Contact();
  contacts:Contact[] = [];
  constructor(private service:ContactService){}

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
    .subscribe(retorno => this.contact = retorno);
  }

  createContact():void{
      this.service.createContact(this.contact)
      .subscribe(retorno => {
        this.contacts.push(retorno);
        this.contact = new Contact();
      });
  }

  updateContact(id: Number){
    this.selectContactById(id);
    this.showButton = true;
    const table = document.getElementById('tbl') as HTMLInputElement;
    table.style.visibility = "hidden";
  }

  updateInformatio(){
    if(this.contact.nome !="" || this.contact.telefone !=""){
      this.service.updateContact(this.contact).subscribe();
      alert('Contact information updated!')
      location.reload();
    } else{
      alert('Please insert the contact information!');
    }
  }

  deleteContact(id: Number):void{
    this.service.deleteById(id).subscribe();
    alert('Contact deleted!')
    location.reload();
  }
  
  cancelUpdate(){
    location.reload();
  }
  
}
