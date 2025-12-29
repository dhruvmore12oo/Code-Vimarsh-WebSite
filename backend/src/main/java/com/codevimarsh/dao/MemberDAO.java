package com.codevimarsh.dao;

import com.codevimarsh.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberDAO extends JpaRepository<Member, Long> {
}


