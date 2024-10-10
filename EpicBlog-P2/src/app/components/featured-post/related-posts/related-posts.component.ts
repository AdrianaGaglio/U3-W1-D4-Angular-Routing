import { Component, Input, OnInit } from '@angular/core';
import { iPost } from '../../../interfaces/ipost';
import { iJSONresponse } from '../../../interfaces/ijsonresponse';

@Component({
  selector: '.app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrl: './related-posts.component.scss',
})
export class RelatedPostsComponent implements OnInit {
  @Input() featuredPost!: iPost;

  posts: iPost[] = [];
  relatedPosts: iPost[] = [];
  // featuredIndex: number = 0;
  index: number = 0;

  ngOnInit() {
    // esegue al caricamento del componente
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((data) => {
        // prendo i tag del featuredPost
        const tags: string[] = this.featuredPost.tags;
        // per ogni post estraggo i post con tag correlati
        data.posts.forEach((post) => {
          tags.forEach((tag, i) => {
            if (post.tags[i] === tag && post.id !== this.featuredPost.id) {
              this.posts.push(post);
            }
          });
        });
        for (let i = 0; i < 4; i++) {
          const current = this.posts[i];
          if (this.relatedPosts.indexOf(current) === -1) {
            this.relatedPosts.push(current);
          }
        }
      })
      .catch((err) => console.log(err));
  }
}
