const { json } = require("express");
const connection = require("../Config/db");

const homeRoute = (req, res) => {
  var sql = "select * from userinfo";
  connection.query(sql, (error, data) => {
    if (error) {
      res.status(500).send(" data can not fetched");
    }
    res.status(200).send(data);
  });
};

const insertRoute = (req, res) => {
  const { name, age } = req.body;
  let sql = ` INSERT INTO userinfo (name , age) VALUES (?,?);`;
  connection.query(sql, [name, age], (error, data) => {
    if (error) {
      res.status(500).send(error.message);
    }
    res.status(200).send(data);
  });
};

const singleData = (req, res) => {
  const id = req.params.id;
  let sql = `select * from userinfo where id=?`;
  connection.query(sql, [id], (error, data) => {
    if (error) {
      res.status(500).json({
        message: "Data not found",
      });
    } else {
      res.send(data);
    }
  });
};

const deleteData = (req, res) => {
  const id = req.params.id;
  let sql = `delete from userinfo where id=?`;
  connection.query(sql, [id], (error, data) => {
    if (error) {
      res.status(500).json({
        message: "Data not found",
      });
    } else {
      res.status(200).json({
        completed: "successfull",
      });
    }
  });
};
const updateData = (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  let sql = `update userinfo set name=?, age=? where id=?`;
  connection.query(sql, [name, age, id], (error, data) => {
    if (error) {
      res.status(500).json({
        message: "Data not updated",
      });
    } else {
      res.status(200).json({
        completed: "successfull",
        data: data,
      });
    }
  });
};

module.exports = { homeRoute, insertRoute, singleData, deleteData, updateData };
