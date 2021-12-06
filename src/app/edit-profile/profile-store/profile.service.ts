import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Profile } from 'src/app/edit-profile/profile-store';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly PROFILE_JSON_URL = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getProfileJson(): Observable<Profile> {
    return this.http.get<any>(this.PROFILE_JSON_URL)
      .pipe(
        map(json => ({
          id: -1,
          name: json.user.name + ' ' + json.user.surname,
          userName: json.user.displayName,
          password: json.user.password,
          address: json.user.contact.locations[0].address.streetName,
          city: json.user.contact.locations[0].address.city,
          zip: json.user.contact.locations[0].address.postalCode,
          email: json.user.contact.email,
          phone: json.user.contact.phoneNumber,
        } as Profile))
      )
  }
}
