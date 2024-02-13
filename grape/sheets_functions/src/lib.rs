pub fn add(left: usize, right: usize) -> usize {
    left + right
}

// join take two NUMBER | STRING and return a STRING
pub fn join(left: impl ToString, right: impl ToString) -> String {
    format!("{}{}", left.to_string(), right.to_string())
}



#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(1, 2), 3);
    }
    #[test]
    fn test_join() {
        assert_eq!(join(1, 2), "12");
        assert_eq!(join("1", "2"), "12");
    }
}
