import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SchemaService} from "../_service/schema.service";
import {Schema} from "../_models/schema";

@Component({
  selector: 'app-schema-details',
  templateUrl: './schema-details.component.html',
  styleUrls: ['./schema-details.component.css']
})
export class SchemaDetailsComponent implements OnInit {
  schema: Schema;
  previewData;

  constructor(private route: ActivatedRoute, private schemaService: SchemaService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.schemaService.getSchemaById(id).subscribe(
        schema => this.schema = schema,
        error => console.log(error)
      );
    });
  }

  preview() {
    this.schemaService.previewBySchemaId(this.schema.id).subscribe(
      data => this.previewData = data,
      error => console.log(error));
  }

}
