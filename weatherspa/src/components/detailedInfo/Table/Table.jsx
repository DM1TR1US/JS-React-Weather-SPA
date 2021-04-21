import React from 'react';
import s from './Table.module.css';


const Table = (props) => {

    return (
            <table>
                <caption>Detailed info</caption>
                <tr>
                    <th>00:00</th>
                    <th>01:00</th>
                    <th>02:00</th>
                    <th>03:00</th>
                    <th>04:00</th>
                    <th>05:00</th>
                    <th>06:00</th>
                    <th>07:00</th>
                    <th>08:00</th>
                    <th>09:00</th>
                    <th>10:00</th>
                    <th>11:00</th>
                    <th>12:00</th>
                </tr>
                <tr><td>+5</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>+4</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>+3</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>+2</td><td>'</td><td>'</td><td>'</td><td>'</td><td>+22</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>+1</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>0</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>-1</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>-2</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>-3</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>-4</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>
                <tr><td>-5</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td><td>'</td></tr>

            </table>
    );
}

export default Table;