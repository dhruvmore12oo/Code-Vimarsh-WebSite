package com.codevimarsh.service;

import com.codevimarsh.dao.MemberDAO;
import com.codevimarsh.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberDAO memberDAO;

    public List<Member> getAllMembers() {
        return memberDAO.findAll();
    }

    public Member saveMember(Member member) {
        return memberDAO.save(member);
    }
}


