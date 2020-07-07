import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students, filter) {
    let res=this.sort(students);
    let find=this.sort(filter);
    
    if (filter.group != null && filter.group != ""){
      res = res.filter(
        function (elm){
          return elm.group.indexOf(filter.group) == 0;
        }); 
    }
    if (filter.course != null && filter.course != ""){
      res = res.filter(
        function (elm){
          return elm.course.indexOf(filter.course) == 0;
        }); 
    }
    return res;
  }
  sort(search){
    if ((search.group!=null)&&(search.group.search(" ")!=-1)){
      let bufer=search.group.slice(search.group.search(" ")+1,search.group.length);
      search.group=search.group.slice(0,search.group.search(" "))
      search.course=bufer;
    }
  return search;
  }
  

}
