import { Component } from '@angular/core';
import { gift } from '../models/gift.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

 index:number=0;

 ngAfterContentInit() {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");

  var span = document.getElementById("close");

  if (btn) {
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      if (modal)
        modal.style.display = "block";
    }
  }

  if (span)
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      if (modal)
        modal.style.display = "none";
    }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event: any) {
    if (event.target == modal) {
      if (modal)
        modal.style.display = "none";

    }
  }
}
}
