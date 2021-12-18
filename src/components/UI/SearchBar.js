import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
  const searchBarRef = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  let navigate = useNavigate();
  const onSubmitHandler= (e)=>{
    e.preventDefault();
    const searchTerm =  searchBarRef.current.value;
    if(searchTerm.trim().length === 0 ){
      setIsFormValid(false);
      return ;
    }
    setIsFormValid(true);
    navigate(`/search-${searchTerm}`);
  }


  const onInputChange=(event)=>{
    if(props.onSearchPhraseChange!=null)
    props.onSearchPhraseChange(event.target.value);
  }
  const classNames = "search-form "+props.className;
    return (
        <form onSubmit={onSubmitHandler} className={classNames}>
        <div className="form-group">
          <span className="icon icon-search"></span>
          <input ref={searchBarRef} type="text" onChange={onInputChange} className="form-control" style={isFormValid ? {}: {border: "2px solid red"}}  value={props.searchTerm} placeholder="Type a keyword and hit enter" />
        </div>
      </form>
    )
}

export default SearchBar
