import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Favorite TV Show"),
        ),
        body: getListView(),
      ),
    ),
  );
}

Widget getListView() {
  var listview = ListView(
    children: <Widget>[
      ListTile(
        leading: Icon(Icons.bubble_chart),
        title: Text("Iris"),
        subtitle: Text("Netflix"),
        trailing: Icon(Icons.bubble_chart),
      )
    ],
  );
  return listview;
}
ListTile(                            
  leading: Icon(Icons.bubble_chart), 
  title: Text("Tribes of Europa"),
  subtitle: Text("Netflix"),
  trailing: Icon(Icons.bubble_chart),
),            
