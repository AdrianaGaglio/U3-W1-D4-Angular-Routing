import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/ijsonresponse';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent implements OnInit {
  activePost!: iPost[];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((data) => {
        this.activePost = Array.from(data.posts).filter((post) => post.active);
      })
      .catch((err) => console.log(err));
  }
}
