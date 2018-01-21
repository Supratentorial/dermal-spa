import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, FormsModule, InlineSVGModule, NgbModule],
    exports: [PageHeaderComponent],
    declarations: [
        PageHeaderComponent
    ],
    providers: [],
})
export class SharedModule { }
