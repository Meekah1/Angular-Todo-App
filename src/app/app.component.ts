import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-wrapper">
      <div class="app-container">
        <h1>✨ Todo Manager</h1>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      * {
        box-sizing: border-box;
        font-family: 'Segoe UI', sans-serif;
      }

      body {
        margin: 0;
      }

      .app-wrapper {
        min-height: 100vh;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }

      .app-container {
        width: 100%;
        max-width: 600px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        color: white;
      }

      h1 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2rem;
      }
    `,
  ],
})
export class AppComponent {}
