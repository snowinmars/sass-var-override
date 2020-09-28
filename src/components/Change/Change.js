import React from "react";
import './Change.scss';

class Change extends React.Component {
    render() {
        return (
            <tr className={'change'}>
                <td>Change</td>
                <td className={'group1 original'}>Original 1</td>
                <td className={'group1 override'}>Override 1</td>
                <td className={'group2 original'}>Original 2</td>
                <td className={'group2 override'}>Override 2</td>
                <td className={'group3 original'}>Original 3</td>
                <td className={'group3 override'}>Override 3</td>
                <td className={'group4 original'}>Original 4</td>
                <td className={'group4 override'}>Override 4</td>
            </tr>
        );
    }
}

export default Change;