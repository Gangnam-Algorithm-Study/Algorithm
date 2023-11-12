//
//  올바른 괄호.swift
//  Algorithm
//
//  Created by 임영선 on 2023/11/03.
//

import Foundation

func solution(_ s: String) -> Bool{
    var stack = ""
    
    for i in s{
        if(i == "("){
            stack.append("(")
        }else{
            if(stack.isEmpty){
                return false
            }else{
                stack.popLast()
            }
        }
    }
    return stack.isEmpty ? true : false
}
