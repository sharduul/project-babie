### Notes

Calculate height of the device (screen)

    - height: calc(100%) 


#### Create REAL sticky footer
- which will always stay at the bottom of the page
- irrespective of height of the main content... or no content!
- layout the content as the code in header.html
- then change the CSS as following.. it is for the div inside ion-view

```
// this is the div inside ion-view.. created by ionic
// this style is needed so that name details view will have full height as well as be scrollable
// and more importantly... you can have a sticky footer!!!.. always stuck to the bottom of the screen
.pane{
  height: -moz-calc(100%) !important;
  height: -webkit-calc(100%) !important;
  height: calc(100%) !important;
}
```
