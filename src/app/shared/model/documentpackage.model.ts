export class DocumentPackage {
  id: number;
  name: string;
  file: File;
  link: string;
  version: number;
  dateupload: number;
  description: string;
  constructor(
    id,
    name,
    file,
    link,
    version,
    dateupload,
    description
  ) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.file = file;
    this.version = version;
    this.dateupload = dateupload;
    this.description = description;
  }
}
