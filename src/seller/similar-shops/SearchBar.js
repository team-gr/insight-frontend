import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";

export default function SearchBar() {
    return (
        <div className="gx-module-box-header-inner">
            <AutoComplete
                className="certain-category-search w-full"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={false}
                options={options}
                placeholder="Search Keywords"
                onChange={(update) => console.log("[on change]", update)}
                onSelect={(selected) => console.log("[on select]", selected)}
            >
                <Input suffix={<SearchOutlined />} />
            </AutoComplete>
        </div>
    )
}