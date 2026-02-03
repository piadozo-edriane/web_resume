import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from "./navigation-bar/navigation-bar";
import { Projects } from "./projects/projects";
import { Techstacks } from "./techstacks/techstacks";
import { Socials } from "./socials/socials";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar, Projects, Techstacks, Socials],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-resume');
}
