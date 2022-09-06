import { Component, OnInit } from '@angular/core';

import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { map, Observable, tap } from 'rxjs';

interface User {
  first_name: string;
  last_name: string;
  age: number;
  coder: boolean;
}

@Component({
  selector: 'app-fire-test',
  templateUrl: './fire-test.component.html',
  styleUrls: ['./fire-test.component.scss']
})
export class FireTestComponent implements OnInit {

  private userCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.userCollection = collection(this.firestore, 'users');
   }

  ngOnInit(): void {
  //  console.log(this.getAll());

    this.getAll().pipe(
      tap((data) => {
        console.log(data);
      })
    ).subscribe();

  }

  createUser() {
    this.create({first_name: 'John', last_name: 'Doe', age: 42, coder: true});
  }

  getAll() {
    return collectionData(this.userCollection, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  get(id: string) {
    const userDocumentReference = doc(this.firestore, `user/${id}`);
    return docData(userDocumentReference, { idField: 'id' });
  }

  create(user: User) {
    return addDoc(this.userCollection, user);
  }

  // update(user: User) {
  //   const userDocumentReference = doc(
  //     this.firestore,
  //     `user/${user.id}`
  //   );
  //   return updateDoc(userDocumentReference, { ...user });
  // }

  delete(id: string) {
    const userDocumentReference = doc(this.firestore, `user/${id}`);
    return deleteDoc(userDocumentReference);
  }

}
