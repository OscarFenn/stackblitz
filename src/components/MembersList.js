import React, { useState, useContext } from 'react';
import Member from './Member';
import { MemberContext } from './MemberContext';

const MembersList = () => {
  const [members, setMembers] = useContext(MemberContext);

  return (
    <>
      {members.map((member) => (
        <Member
          name={member.name}
          description={member.description}
          fruit={member.fruit}
          
        />
      ))}
    </>
  );
};

export default MembersList;