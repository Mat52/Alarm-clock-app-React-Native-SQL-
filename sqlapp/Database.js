import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("Lopatkiewicz_Mateusz_4id1.db");
export default class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static createTable() {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS alarmy (id integer primary key not null, hour text, minute text, switch text, pn text, wt text, sr text, czw text, pt text, sob text, ndz text);"
            );
        });
    }

    static add(hours, minutes) {

        db.transaction(
            tx => {
                tx.executeSql("INSERT INTO alarmy (hour, minute, switch, pn, wt, sr, czw, pt, sob, ndz) values ('" + hours + "', '" + minutes + "', 'false' , 'false', 'false', 'false', 'false', 'false', 'false', 'false')");
            },
        )

    }
    static getAll() {
        var query = "SELECT * FROM alarmy";
        //
        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {

                resolve(JSON.stringify(results));

            }, function (tx, error) {

                reject(error);

            });
        }))
    }

    static remove(id) {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM alarmy WHERE (id = " + id + "); "
            );
        });

    }

    static removeAll() {

        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM alarmy ;"
            );
        });
    }


}
