import { Component } from '@angular/core';

@Component({
  selector: 'app-templet',
  standalone: false,
  
  templateUrl: './templet.component.html',
  styleUrl: './templet.component.css'
})
export class TempletComponent {
  images: string[] = [
    'https://wallpapers.com/images/hd/himalayan-bike-cliff-parking-3fstquc46boewdvg.jpg',
    'https://www.team-bhp.com/forum/attachments/motorbikes/2525747d1699104504-2023-royal-enfield-himalayan-450-now-officially-revealed-1.jpeg',
    'https://wallpapercat.com/w/full/8/e/7/607651-3840x2160-desktop-4k-sports-car-background-image.jpg'
  ];  

    currentIndex: number = 0;

    slideNext() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  
    slidePrev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
}
