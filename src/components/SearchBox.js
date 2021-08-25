import React, { useState, useEffect } from "react";
import { Input, AutoComplete } from "antd";
import "antd/dist/antd.css";
import algoliasearch from "algoliasearch";
import _ from "lodash";
import { useRouter } from "next/router";

let searchClient;
let index;
let hits = [];

const suggestions = (response) =>
  response.map((countries) => {
    const category = countries.name;
    return {
      value: category,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {category}
        </div>
      ),
    };
  });

const Complete = (props) => {
  const { keywords } = props;
  const [query, setQuery] = useState("");
  const [_searchQuery, setSearchQuery] = useState({});

  const router = useRouter();
  useEffect(() => {
    searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALOGOLIA_SEARCH_KEY
    );
    index = searchClient.initIndex("suggestions");
    index.search({ query }).then(console.log);
  }, []);

  const [options, setOptions] = useState([]);

  async function sendQuery(query) {
    const result = await index.search(query.trim());
    hits = result.hits;
    handleSearch(hits);

    //console.log(hits);
  }

  const handleSearch = (response) => {
    setOptions(response ? suggestions(response) : []);
  };

  const onSelect = async (value) => {
    //console.log("Selected Value", value);
    // const response = await searchImages(value, 1);
    // const { data } = response;
    // console.log(data);
    router.push(`/unsplash/?keywords=${value}&page=1`);
  };

  const onChange = (value) => {
    setQuery(value);

    const search = _.debounce(sendQuery, 300);

    setSearchQuery((prevSearch) => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });

    search(value);
  };
  const handleEnter = (e) => {
    if (e.keyCode == 13) {
      onSelect(e.target.value);
    }
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 500,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={onChange}
      onKeyDown={handleEnter}
      defaultValue={keywords}
    >
      <Input.Search size="large" placeholder="Search any image" enterButton />
    </AutoComplete>
  );
};

export default Complete;
