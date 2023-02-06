import React, {useState, createContext} from "react";

export const MemberContext = createContext();

export const MemberProvider = props => {
  const [members, setMembers] = useState([
    {
      name: 'Bud Baxter',
      description: 'Household contact',
      fruit: 'Apple',
      
    },
    {
      name: 'Andy Baxter',
      description: 'Household contact',
      fruit: 'Apple',
      
    }
  ])
  return(
<MemberContext.Provider value={[members, setMembers]}>
  {props.children}
</MemberContext.Provider>
  );
}