"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Aluno = /*#__PURE__*/_createClass(function Aluno(nomeDoAluno, notaDoAluno) {
  _classCallCheck(this, Aluno);
  this.nome = nomeDoAluno;
  this.nota = notaDoAluno;
});
var alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4'];
var notas = [7, 5, 6, 2];
var alunosNotas = alunos.map(function (nomeDoAluno, Index) {
  return new Aluno(nomeDoAluno, notas[Index]);
});
function aprovados(aluno) {
  return aluno.nota >= 6;
}
var alunosAprovados = alunosNotas.filter(aprovados);
console.log('Os alunos aprovados são: ', alunosAprovados);