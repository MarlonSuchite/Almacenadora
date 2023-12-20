import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, SharedRoutingModule, RouterModule],
  exports: [NavBarComponent, FooterComponent]
})
export class SharedModule {}
