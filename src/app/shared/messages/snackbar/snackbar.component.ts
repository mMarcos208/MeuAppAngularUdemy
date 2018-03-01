import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  transition,
  animate,
  style
} from "@angular/animations";
@Component({
  selector: "mt-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.css"],
  animations: [
    trigger("snack-visible", [
      state(
        "hidden",
        style({
          opacity: 0,
          bottom: 0
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          bottom: "30px"
        })
      ),
      transition("hidden => visible", animate("500 ms 0s ease-in")),
      transition("visible => hidden", animate("500 ms 0s ease-out"))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  mesage: string = "Hello SnackBar";
  snackVisible: string = "hidden";
  constructor() {}

  ngOnInit() {}

}
