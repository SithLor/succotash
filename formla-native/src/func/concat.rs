//Excel Style Concat Allow {=CONCAT(A1:A3)}}]

pub fn internal_concat(args: Vec<&str>) -> String {
    let mut result = String::new();
    for arg in args {
        result.push_str(arg);
    }
    result
}