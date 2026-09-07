public static bool Exist(char[][] board, string word)
{
    List<char> list = new List<char>();
    Search(board, word, 0, 0, 0, list);
    return list.Count == word.Length ? true : false;
}
public static void Search(char[][] board, string word, int i1, int j1, int charI, List<char> list)
{
    if (list.Count == word.Length)
    {
        return;
    }

    for (int i = i1; i < board.Length; i++)
    {
        for (int j = j1; j < board[0].Length; j++)
        {
            if (board[i][j] == word[charI])
            {
                list.Add(board[i][j]);   

                if (i > 0 && board[i - 1][j] == word[charI + 1])
                {

                    Search(board, word, i - 1, j, charI + 1, list);

                }
                else if (j < board[0].Length -1 && board[i][j + 1] == word[charI + 1])
                {

                    Search(board, word, i , j + 1, charI + 1, list);

                }
                else if (i < board.Length -1 && board[i + 1][j] == word[charI + 1])
                {

                    Search(board, word, i + 1, j, charI + 1, list);

                }
                else if (j > 0 && board[i][j - 1] == word[charI + 1])
                {

                    Search(board, word, i, j - 1, charI + 1, list);

                }
                else
                {
                    list.Remove(board[i][j]);
                }
            }
        }
    }
}
