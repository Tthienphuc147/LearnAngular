export class DocumentPackage {
  id: number;
  name: string;
  filename: string;
  file: File;
  link: string;
  version: number;
  dateupload: string;
  description: string;
  constructor(id, name, filename, link, version, dateupload, description) {
    this.id = id;
    this.name = name;
    this.filename = filename;
    this.link = link;
    this.version = version;
    this.dateupload = dateupload;
    this.description = description;
  }
}
