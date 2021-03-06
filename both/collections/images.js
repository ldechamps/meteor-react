//import { FS } from 'meteor/cfs:collection';
import { FS } from 'meteor/cfs:base-package';

export const Images = new FS.Collection('images', {
    stores:[new FS.Store.FileSystem('images',  {path:'./uploads'})]
});

Images.allow({
    insert:() => true,
    update:()=> true,
    remove:()=> true
})