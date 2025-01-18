import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: false,
  
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  boxes = [
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Car 1', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' },
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Bike 1', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' },
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Car 2', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' },
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Bike 2', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' },
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Bike 2', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' },
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Bike 2', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' },
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Bike 2', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' },
    { imgSrc: 'https://s3.boostcamp.app/blog-thumbnail/4068593053.png', alt: 'Bike 2', heading: 'Hey there!', saveBtn: 'Yes!!!', laterBtn: 'Opps!' }
    // Add more objects as needed
  ];
}
