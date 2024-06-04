
import { Chart } from "react-google-charts";
import Guide from "./guide";
//start sankey diagram
export const data = [
    ["from", "To", "Weight"],
    ["bar-left", "foo-right", 3],
    ["bar-left", "bar-right", 3],
    ["bar-left", "baz-right", 3],
    ["foo-left", "bar-right", 3],
    ["foo-left", "baz-right", 3],
    ["baz-left", "bar-right", 3],
];
//Matching colors
var colors = ['#FF7518', '#D70040', '#C181D8', '#967969',
    '#0096FF', '#00A36C'
];

// Set chart options
var options = {

    sankey: {
        node: {
            colors: colors,
            width: 5,
            nodePadding: 1
        },
        link: {
            colorMode: 'gradient',
            colors: colors
        }
    }
};
//skeleton sankey
export function Sankey() {
    return (
        <div className="mt-2 w-12/12 flex flex-col md:flex-row">
            <div className="md:w-10/12 w-12/12">
                <Chart
                    chartType="Sankey"
                    width="100%"
                    height="240px"
                    data={data}
                    options={options}
                />
            </div>
            {/* commponents Guide  */}
            <Guide />
        </div>

    );
}