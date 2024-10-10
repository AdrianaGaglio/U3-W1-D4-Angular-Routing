import { Component } from '@angular/core';
import { iJSONresponse } from '../../interfaces/ijsonresponse';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  inactivePosts!: iPost[];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((data) => {
        this.inactivePosts = Array.from(data.posts).filter(
          (post) => !post.active
        );
      })
      .catch((err) => console.log(err));
  }
}
