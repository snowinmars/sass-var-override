import React from 'react';
import './App.scss';

import Table from "react-bootstrap/Table";

import Darken from '../../components/Darken/Darken';
import Mix from '../../components/Mix/Mix';
import Rgba from '../../components/Rgba/Rgba';
import Hsla from '../../components/Hsla/Hsla';
import Change from '../../components/Change/Change';
import Adjust from '../../components/Adjust/Adjust';
import Desaturate from '../../components/Desaturate/Desaturate';
import Invert from '../../components/Invert/Invert';
import Lighten from '../../components/Lighten/Lighten';
import Opacify from "../../components/Opacify/Opacify";
import Saturate from "../../components/Saturate/Saturate";
import Scale from "../../components/Scale/Scale";
import Transparentize from "../../components/Transparentize/Transparentize";

// the X function will be overriden after 'import X' line

class App extends React.Component {
    render() {
        return (
            <Table size="sm">
                <thead>
                <tr>
                    <td rowSpan={2}>Function name</td>
                    <td colSpan={2}>Group 1</td>
                    <td colSpan={2}>Group 2</td>
                    <td colSpan={2}>Group 3</td>
                    <td colSpan={2}>Group 4</td>
                </tr>
                <tr>
                    <td>Scss</td>
                    <td>Overrided</td>
                    <td>Scss</td>
                    <td>Overrided</td>
                    <td>Scss</td>
                    <td>Overrided</td>
                    <td>Scss</td>
                    <td>Overrided</td>
                </tr>
                </thead>
                <tbody>
                    <Darken/>
                    <Lighten/>
                    <Mix/>
                    <Rgba/>
                    <Hsla/>
                    <Change/>
                    <Adjust/>
                    <Desaturate/>
                    <Invert/>
                    <Opacify/>
                    <Saturate/>
                    <Scale/>
                    <Transparentize/>
                </tbody>
            </Table>
        );
    }
}

export default App;
