import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iJSONresponse } from '../../interfaces/ijsonresponse';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  post!: iPost;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      fetch('db.json')
        .then((res) => <Promise<iJSONresponse>>res.json())
        .then((data) => {
          this.post = <iPost>(
            data.posts.find((post) => post.id === parseInt(params.id))
          );
        });
    });
  }
}
