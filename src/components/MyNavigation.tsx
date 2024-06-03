import { Props } from "../types";

function MyNavigation(props: Props) {
    return <div>
        <a class="text-white no-underline bg-blue-400 hover:bg-blue-500 hover:shadow-md p-2 rounded-xl" href="/learn-solid">Back to Home</a>
        {props.children}
    </div>
}

export default MyNavigation