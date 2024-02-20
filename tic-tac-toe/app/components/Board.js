import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const renderSquare = (index) => {
    return (
      <Square value={squares[index]} onPress={() => handleSquareClick(index)} />
    );
  };

  const handleSquareClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== null)
    ? "It's a draw!"
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <View style={styles.board}>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>{status}</Text>
      </View>
      <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    alignItems: "center",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
  },
  statusContainer: {
    marginBottom: 10,
  },
  status: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
