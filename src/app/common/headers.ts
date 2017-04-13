import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
if ( localStorage.getItem('token') && localStorage.getItem('token').length > 0 &&
  localStorage.getItem('token') != "undefined" && localStorage.getItem('token') !== undefined &&
  localStorage.getItem('token') !== null )
{
  contentHeaders.append('Authorization', 'Token '+localStorage.getItem('token'));
}
