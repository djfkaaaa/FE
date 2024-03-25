'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function pwcheck() {
    const [pw, setPw] = useState('');
    const [pwAgain, setPwAgain] = useState('');
    const [matching, setMatching] = useState(Boolean); 
    const [nullMatching, setNullMatching] = useState(Boolean); 

    useEffect(() => {
        
        if (pw === '' && pwAgain === '') {
            setNullMatching(true);
        } else {
            setNullMatching(false);
        }

        
        if (pw === pwAgain && pw !== '' && pwAgain !== '') {
            setMatching(true);
        } else {
            setMatching(false);
        }
    }, [pw, pwAgain]);

    return (
        <>
            <div>비밀번호 확인</div> <br />
            <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호 입력" /> <br /> <br />
            <input type="text" value={pwAgain} onChange={(e) => setPwAgain(e.target.value)} placeholder="비밀번호 재입력" /> <br /> <br />
            {nullMatching && <p style={{color: 'purple'}}>비밀번호를 입력해주세요</p>}
            {matching && <p style={{ color: 'green' }}>일치합니다</p>}
            {!matching && !nullMatching && <p style={{ color: 'red' }}>일치하지 않습니다</p>}
            <Link href={"http://localhost:3000/"}>Back to HOME</Link>
        </>
    );
}
