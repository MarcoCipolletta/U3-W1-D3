import { Component } from '@angular/core';
import { PostInterface } from '../../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: PostInterface[] = [];
  firstpost!: PostInterface;
  relatedPosts: PostInterface[] = [];
  isLoading: boolean = true;

  getposts() {
    fetch('db.json')
      .then((res) => res.json())
      .then((res) => {
        const firstPostIndex = Math.floor(Math.random() * this.posts.length);
        this.posts = res.posts;
        this.firstpost = this.posts[firstPostIndex];
        while (this.relatedPosts.length < 4) {
          let randomPostIndex = Math.floor(Math.random() * this.posts.length);
          const arrayIndexPosts: number[] = [];

          if (
            randomPostIndex !== firstPostIndex &&
            !arrayIndexPosts.includes(randomPostIndex)
          ) {
            this.relatedPosts.push(this.posts[randomPostIndex]);
            arrayIndexPosts.push(randomPostIndex);
          }
        }
        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.getposts();
  }
}
