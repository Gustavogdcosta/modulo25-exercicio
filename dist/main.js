"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Aluno = /*#__PURE__*/function () {
  function Aluno(nomeDoAluno, notaDoAluno) {
    _classCallCheck(this, Aluno);
    this.nome = nomeDoAluno;
    this.nota = notaDoAluno;
  }
  return _createClass(Aluno, [{
    key: "aprovadoReprovad",
    value: function aprovadoReprovad() {
      if (this.nota >= 6) {
        console.log("".concat(this.nome, " est\xE1 aprovado(a) com nota ").concat(this.nota));
      } else {
        console.log("Infelizmente, ".concat(this.nome, " foi reprovado(a) com nota ").concat(this.nota));
      }
    }
  }]);
}();
var Aluno1 = new Aluno('Aluno1', 8);
var Aluno2 = new Aluno('Aluno2', 2);
var Aluno3 = new Aluno('Aluno3', 5);
var Aluno4 = new Aluno('Aluno4', 7);
console.log(Aluno1);
Aluno1.aprovadoReprovad();
console.log(Aluno2);
Aluno2.aprovadoReprovad();
console.log(Aluno3);
Aluno3.aprovadoReprovad();
console.log(Aluno4);
Aluno4.aprovadoReprovad();