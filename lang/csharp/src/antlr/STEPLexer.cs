//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.7
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from /Users/ikeough/Documents/IFC-gen/STEP.g4 by ANTLR 4.7

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

namespace STEP {
using System;
using System.IO;
using System.Text;
using Antlr4.Runtime;
using Antlr4.Runtime.Atn;
using Antlr4.Runtime.Misc;
using DFA = Antlr4.Runtime.Dfa.DFA;

[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.7")]
[System.CLSCompliant(false)]
public partial class STEPLexer : Lexer {
	protected static DFA[] decisionToDFA;
	protected static PredictionContextCache sharedContextCache = new PredictionContextCache();
	public const int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, IntegerLiteral=9, 
		Letter=10, CapitalLetter=11, DateTime=12, Derived=13, BoolLogical=14, 
		Enum=15, RealLiteral=16, DATA=17, ENDSEC=18, FILE_DESCRIPTION=19, FILE_NAME=20, 
		FILE_SCHEMA=21, HEADER=22, Id=23, ISO=24, ISO_END=25, StringLiteral=26, 
		TypeRef=27, Undefined=28, AnyString=29, NewlineChar=30, WS=31, Comments=32;
	public static string[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static string[] modeNames = {
		"DEFAULT_MODE"
	};

	public static readonly string[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "Digit", 
		"Digits", "IntegerLiteral", "Letter", "CapitalLetter", "DateTime", "Derived", 
		"BoolLogical", "Enum", "RealLiteral", "DATA", "ENDSEC", "FILE_DESCRIPTION", 
		"FILE_NAME", "FILE_SCHEMA", "HEADER", "Id", "ISO", "ISO_END", "StringLiteral", 
		"TypeRef", "Undefined", "AnyString", "NewlineChar", "WS", "Comments"
	};


	public STEPLexer(ICharStream input)
	: this(input, Console.Out, Console.Error) { }

	public STEPLexer(ICharStream input, TextWriter output, TextWriter errorOutput)
	: base(input, output, errorOutput)
	{
		Interpreter = new LexerATNSimulator(this, _ATN, decisionToDFA, sharedContextCache);
	}

	private static readonly string[] _LiteralNames = {
		null, "'('", "','", "')'", "'()'", "';'", "'''", "'.'", "'='", null, null, 
		null, null, "'*'", null, null, null, "'DATA'", "'ENDSEC'", "'FILE_DESCRIPTION'", 
		"'FILE_NAME'", "'FILE_SCHEMA'", "'HEADER'", null, null, null, null, null, 
		"'$'"
	};
	private static readonly string[] _SymbolicNames = {
		null, null, null, null, null, null, null, null, null, "IntegerLiteral", 
		"Letter", "CapitalLetter", "DateTime", "Derived", "BoolLogical", "Enum", 
		"RealLiteral", "DATA", "ENDSEC", "FILE_DESCRIPTION", "FILE_NAME", "FILE_SCHEMA", 
		"HEADER", "Id", "ISO", "ISO_END", "StringLiteral", "TypeRef", "Undefined", 
		"AnyString", "NewlineChar", "WS", "Comments"
	};
	public static readonly IVocabulary DefaultVocabulary = new Vocabulary(_LiteralNames, _SymbolicNames);

	[NotNull]
	public override IVocabulary Vocabulary
	{
		get
		{
			return DefaultVocabulary;
		}
	}

	public override string GrammarFileName { get { return "STEP.g4"; } }

	public override string[] RuleNames { get { return ruleNames; } }

	public override string[] ChannelNames { get { return channelNames; } }

	public override string[] ModeNames { get { return modeNames; } }

	public override string SerializedAtn { get { return new string(_serializedATN); } }

	static STEPLexer() {
		decisionToDFA = new DFA[_ATN.NumberOfDecisions];
		for (int i = 0; i < _ATN.NumberOfDecisions; i++) {
			decisionToDFA[i] = new DFA(_ATN.GetDecisionState(i), i);
		}
	}
	private static char[] _serializedATN = {
		'\x3', '\x608B', '\xA72A', '\x8133', '\xB9ED', '\x417C', '\x3BE7', '\x7786', 
		'\x5964', '\x2', '\"', '\x129', '\b', '\x1', '\x4', '\x2', '\t', '\x2', 
		'\x4', '\x3', '\t', '\x3', '\x4', '\x4', '\t', '\x4', '\x4', '\x5', '\t', 
		'\x5', '\x4', '\x6', '\t', '\x6', '\x4', '\a', '\t', '\a', '\x4', '\b', 
		'\t', '\b', '\x4', '\t', '\t', '\t', '\x4', '\n', '\t', '\n', '\x4', '\v', 
		'\t', '\v', '\x4', '\f', '\t', '\f', '\x4', '\r', '\t', '\r', '\x4', '\xE', 
		'\t', '\xE', '\x4', '\xF', '\t', '\xF', '\x4', '\x10', '\t', '\x10', '\x4', 
		'\x11', '\t', '\x11', '\x4', '\x12', '\t', '\x12', '\x4', '\x13', '\t', 
		'\x13', '\x4', '\x14', '\t', '\x14', '\x4', '\x15', '\t', '\x15', '\x4', 
		'\x16', '\t', '\x16', '\x4', '\x17', '\t', '\x17', '\x4', '\x18', '\t', 
		'\x18', '\x4', '\x19', '\t', '\x19', '\x4', '\x1A', '\t', '\x1A', '\x4', 
		'\x1B', '\t', '\x1B', '\x4', '\x1C', '\t', '\x1C', '\x4', '\x1D', '\t', 
		'\x1D', '\x4', '\x1E', '\t', '\x1E', '\x4', '\x1F', '\t', '\x1F', '\x4', 
		' ', '\t', ' ', '\x4', '!', '\t', '!', '\x4', '\"', '\t', '\"', '\x4', 
		'#', '\t', '#', '\x3', '\x2', '\x3', '\x2', '\x3', '\x3', '\x3', '\x3', 
		'\x3', '\x4', '\x3', '\x4', '\x3', '\x5', '\x3', '\x5', '\x3', '\x5', 
		'\x3', '\x6', '\x3', '\x6', '\x3', '\a', '\x3', '\a', '\x3', '\b', '\x3', 
		'\b', '\x3', '\t', '\x3', '\t', '\x3', '\n', '\x3', '\n', '\x3', '\v', 
		'\x3', '\v', '\a', '\v', ']', '\n', '\v', '\f', '\v', '\xE', '\v', '`', 
		'\v', '\v', '\x3', '\f', '\x5', '\f', '\x63', '\n', '\f', '\x3', '\f', 
		'\x3', '\f', '\x3', '\r', '\x3', '\r', '\x3', '\xE', '\x3', '\xE', '\x3', 
		'\xF', '\x3', '\xF', '\x3', '\xF', '\x3', '\xF', '\x3', '\xF', '\x3', 
		'\xF', '\x3', '\xF', '\x3', '\xF', '\x3', '\xF', '\x3', '\xF', '\x3', 
		'\xF', '\x3', '\xF', '\x3', '\xF', '\x3', '\xF', '\x3', '\x10', '\x3', 
		'\x10', '\x3', '\x11', '\x3', '\x11', '\x3', '\x11', '\x3', '\x11', '\x3', 
		'\x12', '\x3', '\x12', '\x3', '\x12', '\a', '\x12', '\x82', '\n', '\x12', 
		'\f', '\x12', '\xE', '\x12', '\x85', '\v', '\x12', '\x3', '\x12', '\x3', 
		'\x12', '\x3', '\x13', '\x5', '\x13', '\x8A', '\n', '\x13', '\x3', '\x13', 
		'\x3', '\x13', '\x5', '\x13', '\x8E', '\n', '\x13', '\x3', '\x13', '\a', 
		'\x13', '\x91', '\n', '\x13', '\f', '\x13', '\xE', '\x13', '\x94', '\v', 
		'\x13', '\x3', '\x13', '\x3', '\x13', '\x5', '\x13', '\x98', '\n', '\x13', 
		'\x3', '\x13', '\x5', '\x13', '\x9B', '\n', '\x13', '\x3', '\x14', '\x3', 
		'\x14', '\x3', '\x14', '\x3', '\x14', '\x3', '\x14', '\x3', '\x15', '\x3', 
		'\x15', '\x3', '\x15', '\x3', '\x15', '\x3', '\x15', '\x3', '\x15', '\x3', 
		'\x15', '\x3', '\x16', '\x3', '\x16', '\x3', '\x16', '\x3', '\x16', '\x3', 
		'\x16', '\x3', '\x16', '\x3', '\x16', '\x3', '\x16', '\x3', '\x16', '\x3', 
		'\x16', '\x3', '\x16', '\x3', '\x16', '\x3', '\x16', '\x3', '\x16', '\x3', 
		'\x16', '\x3', '\x16', '\x3', '\x16', '\x3', '\x17', '\x3', '\x17', '\x3', 
		'\x17', '\x3', '\x17', '\x3', '\x17', '\x3', '\x17', '\x3', '\x17', '\x3', 
		'\x17', '\x3', '\x17', '\x3', '\x17', '\x3', '\x18', '\x3', '\x18', '\x3', 
		'\x18', '\x3', '\x18', '\x3', '\x18', '\x3', '\x18', '\x3', '\x18', '\x3', 
		'\x18', '\x3', '\x18', '\x3', '\x18', '\x3', '\x18', '\x3', '\x18', '\x3', 
		'\x19', '\x3', '\x19', '\x3', '\x19', '\x3', '\x19', '\x3', '\x19', '\x3', 
		'\x19', '\x3', '\x19', '\x3', '\x1A', '\x3', '\x1A', '\x3', '\x1A', '\x3', 
		'\x1B', '\x3', '\x1B', '\x3', '\x1B', '\x3', '\x1B', '\x3', '\x1B', '\x3', 
		'\x1B', '\x3', '\x1B', '\x3', '\x1B', '\x3', '\x1B', '\x3', '\x1B', '\x3', 
		'\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', 
		'\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', 
		'\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', '\x1C', '\x3', '\x1D', '\x3', 
		'\x1D', '\a', '\x1D', '\xF4', '\n', '\x1D', '\f', '\x1D', '\xE', '\x1D', 
		'\xF7', '\v', '\x1D', '\x3', '\x1D', '\x3', '\x1D', '\x3', '\x1E', '\x3', 
		'\x1E', '\x3', '\x1E', '\a', '\x1E', '\xFE', '\n', '\x1E', '\f', '\x1E', 
		'\xE', '\x1E', '\x101', '\v', '\x1E', '\x3', '\x1F', '\x3', '\x1F', '\x3', 
		' ', '\x3', ' ', '\a', ' ', '\x107', '\n', ' ', '\f', ' ', '\xE', ' ', 
		'\x10A', '\v', ' ', '\x3', ' ', '\x3', ' ', '\x3', '!', '\x6', '!', '\x10F', 
		'\n', '!', '\r', '!', '\xE', '!', '\x110', '\x3', '!', '\x3', '!', '\x3', 
		'\"', '\x6', '\"', '\x116', '\n', '\"', '\r', '\"', '\xE', '\"', '\x117', 
		'\x3', '\"', '\x3', '\"', '\x3', '#', '\x3', '#', '\x3', '#', '\x3', '#', 
		'\a', '#', '\x120', '\n', '#', '\f', '#', '\xE', '#', '\x123', '\v', '#', 
		'\x3', '#', '\x3', '#', '\x3', '#', '\x3', '#', '\x3', '#', '\x4', '\x108', 
		'\x121', '\x2', '$', '\x3', '\x3', '\x5', '\x4', '\a', '\x5', '\t', '\x6', 
		'\v', '\a', '\r', '\b', '\xF', '\t', '\x11', '\n', '\x13', '\x2', '\x15', 
		'\x2', '\x17', '\v', '\x19', '\f', '\x1B', '\r', '\x1D', '\xE', '\x1F', 
		'\xF', '!', '\x10', '#', '\x11', '%', '\x12', '\'', '\x13', ')', '\x14', 
		'+', '\x15', '-', '\x16', '/', '\x17', '\x31', '\x18', '\x33', '\x19', 
		'\x35', '\x1A', '\x37', '\x1B', '\x39', '\x1C', ';', '\x1D', '=', '\x1E', 
		'?', '\x1F', '\x41', ' ', '\x43', '!', '\x45', '\"', '\x3', '\x2', '\n', 
		'\x3', '\x2', '\x32', ';', '\x4', '\x2', '\x43', '\\', '\x63', '|', '\x3', 
		'\x2', '\x43', '\\', '\x4', '\x2', 'H', 'H', 'V', 'W', '\x5', '\x2', '\x32', 
		';', '\x43', '\\', '\x61', '\x61', '\x4', '\x2', 'G', 'G', 'g', 'g', '\x4', 
		'\x2', '\f', '\f', '\xE', '\xF', '\x5', '\x2', '\v', '\f', '\xE', '\xF', 
		'\"', '\"', '\x2', '\x135', '\x2', '\x3', '\x3', '\x2', '\x2', '\x2', 
		'\x2', '\x5', '\x3', '\x2', '\x2', '\x2', '\x2', '\a', '\x3', '\x2', '\x2', 
		'\x2', '\x2', '\t', '\x3', '\x2', '\x2', '\x2', '\x2', '\v', '\x3', '\x2', 
		'\x2', '\x2', '\x2', '\r', '\x3', '\x2', '\x2', '\x2', '\x2', '\xF', '\x3', 
		'\x2', '\x2', '\x2', '\x2', '\x11', '\x3', '\x2', '\x2', '\x2', '\x2', 
		'\x17', '\x3', '\x2', '\x2', '\x2', '\x2', '\x19', '\x3', '\x2', '\x2', 
		'\x2', '\x2', '\x1B', '\x3', '\x2', '\x2', '\x2', '\x2', '\x1D', '\x3', 
		'\x2', '\x2', '\x2', '\x2', '\x1F', '\x3', '\x2', '\x2', '\x2', '\x2', 
		'!', '\x3', '\x2', '\x2', '\x2', '\x2', '#', '\x3', '\x2', '\x2', '\x2', 
		'\x2', '%', '\x3', '\x2', '\x2', '\x2', '\x2', '\'', '\x3', '\x2', '\x2', 
		'\x2', '\x2', ')', '\x3', '\x2', '\x2', '\x2', '\x2', '+', '\x3', '\x2', 
		'\x2', '\x2', '\x2', '-', '\x3', '\x2', '\x2', '\x2', '\x2', '/', '\x3', 
		'\x2', '\x2', '\x2', '\x2', '\x31', '\x3', '\x2', '\x2', '\x2', '\x2', 
		'\x33', '\x3', '\x2', '\x2', '\x2', '\x2', '\x35', '\x3', '\x2', '\x2', 
		'\x2', '\x2', '\x37', '\x3', '\x2', '\x2', '\x2', '\x2', '\x39', '\x3', 
		'\x2', '\x2', '\x2', '\x2', ';', '\x3', '\x2', '\x2', '\x2', '\x2', '=', 
		'\x3', '\x2', '\x2', '\x2', '\x2', '?', '\x3', '\x2', '\x2', '\x2', '\x2', 
		'\x41', '\x3', '\x2', '\x2', '\x2', '\x2', '\x43', '\x3', '\x2', '\x2', 
		'\x2', '\x2', '\x45', '\x3', '\x2', '\x2', '\x2', '\x3', 'G', '\x3', '\x2', 
		'\x2', '\x2', '\x5', 'I', '\x3', '\x2', '\x2', '\x2', '\a', 'K', '\x3', 
		'\x2', '\x2', '\x2', '\t', 'M', '\x3', '\x2', '\x2', '\x2', '\v', 'P', 
		'\x3', '\x2', '\x2', '\x2', '\r', 'R', '\x3', '\x2', '\x2', '\x2', '\xF', 
		'T', '\x3', '\x2', '\x2', '\x2', '\x11', 'V', '\x3', '\x2', '\x2', '\x2', 
		'\x13', 'X', '\x3', '\x2', '\x2', '\x2', '\x15', 'Z', '\x3', '\x2', '\x2', 
		'\x2', '\x17', '\x62', '\x3', '\x2', '\x2', '\x2', '\x19', '\x66', '\x3', 
		'\x2', '\x2', '\x2', '\x1B', 'h', '\x3', '\x2', '\x2', '\x2', '\x1D', 
		'j', '\x3', '\x2', '\x2', '\x2', '\x1F', 'x', '\x3', '\x2', '\x2', '\x2', 
		'!', 'z', '\x3', '\x2', '\x2', '\x2', '#', '~', '\x3', '\x2', '\x2', '\x2', 
		'%', '\x89', '\x3', '\x2', '\x2', '\x2', '\'', '\x9C', '\x3', '\x2', '\x2', 
		'\x2', ')', '\xA1', '\x3', '\x2', '\x2', '\x2', '+', '\xA8', '\x3', '\x2', 
		'\x2', '\x2', '-', '\xB9', '\x3', '\x2', '\x2', '\x2', '/', '\xC3', '\x3', 
		'\x2', '\x2', '\x2', '\x31', '\xCF', '\x3', '\x2', '\x2', '\x2', '\x33', 
		'\xD6', '\x3', '\x2', '\x2', '\x2', '\x35', '\xD9', '\x3', '\x2', '\x2', 
		'\x2', '\x37', '\xE3', '\x3', '\x2', '\x2', '\x2', '\x39', '\xF1', '\x3', 
		'\x2', '\x2', '\x2', ';', '\xFA', '\x3', '\x2', '\x2', '\x2', '=', '\x102', 
		'\x3', '\x2', '\x2', '\x2', '?', '\x104', '\x3', '\x2', '\x2', '\x2', 
		'\x41', '\x10E', '\x3', '\x2', '\x2', '\x2', '\x43', '\x115', '\x3', '\x2', 
		'\x2', '\x2', '\x45', '\x11B', '\x3', '\x2', '\x2', '\x2', 'G', 'H', '\a', 
		'*', '\x2', '\x2', 'H', '\x4', '\x3', '\x2', '\x2', '\x2', 'I', 'J', '\a', 
		'.', '\x2', '\x2', 'J', '\x6', '\x3', '\x2', '\x2', '\x2', 'K', 'L', '\a', 
		'+', '\x2', '\x2', 'L', '\b', '\x3', '\x2', '\x2', '\x2', 'M', 'N', '\a', 
		'*', '\x2', '\x2', 'N', 'O', '\a', '+', '\x2', '\x2', 'O', '\n', '\x3', 
		'\x2', '\x2', '\x2', 'P', 'Q', '\a', '=', '\x2', '\x2', 'Q', '\f', '\x3', 
		'\x2', '\x2', '\x2', 'R', 'S', '\a', ')', '\x2', '\x2', 'S', '\xE', '\x3', 
		'\x2', '\x2', '\x2', 'T', 'U', '\a', '\x30', '\x2', '\x2', 'U', '\x10', 
		'\x3', '\x2', '\x2', '\x2', 'V', 'W', '\a', '?', '\x2', '\x2', 'W', '\x12', 
		'\x3', '\x2', '\x2', '\x2', 'X', 'Y', '\t', '\x2', '\x2', '\x2', 'Y', 
		'\x14', '\x3', '\x2', '\x2', '\x2', 'Z', '^', '\x5', '\x13', '\n', '\x2', 
		'[', ']', '\x5', '\x13', '\n', '\x2', '\\', '[', '\x3', '\x2', '\x2', 
		'\x2', ']', '`', '\x3', '\x2', '\x2', '\x2', '^', '\\', '\x3', '\x2', 
		'\x2', '\x2', '^', '_', '\x3', '\x2', '\x2', '\x2', '_', '\x16', '\x3', 
		'\x2', '\x2', '\x2', '`', '^', '\x3', '\x2', '\x2', '\x2', '\x61', '\x63', 
		'\a', '/', '\x2', '\x2', '\x62', '\x61', '\x3', '\x2', '\x2', '\x2', '\x62', 
		'\x63', '\x3', '\x2', '\x2', '\x2', '\x63', '\x64', '\x3', '\x2', '\x2', 
		'\x2', '\x64', '\x65', '\x5', '\x15', '\v', '\x2', '\x65', '\x18', '\x3', 
		'\x2', '\x2', '\x2', '\x66', 'g', '\t', '\x3', '\x2', '\x2', 'g', '\x1A', 
		'\x3', '\x2', '\x2', '\x2', 'h', 'i', '\t', '\x4', '\x2', '\x2', 'i', 
		'\x1C', '\x3', '\x2', '\x2', '\x2', 'j', 'k', '\a', ')', '\x2', '\x2', 
		'k', 'l', '\x5', '\x15', '\v', '\x2', 'l', 'm', '\a', '/', '\x2', '\x2', 
		'm', 'n', '\x5', '\x15', '\v', '\x2', 'n', 'o', '\a', '/', '\x2', '\x2', 
		'o', 'p', '\x5', '\x15', '\v', '\x2', 'p', 'q', '\a', 'V', '\x2', '\x2', 
		'q', 'r', '\x5', '\x15', '\v', '\x2', 'r', 's', '\a', '<', '\x2', '\x2', 
		's', 't', '\x5', '\x15', '\v', '\x2', 't', 'u', '\a', '<', '\x2', '\x2', 
		'u', 'v', '\x5', '\x15', '\v', '\x2', 'v', 'w', '\a', ')', '\x2', '\x2', 
		'w', '\x1E', '\x3', '\x2', '\x2', '\x2', 'x', 'y', '\a', ',', '\x2', '\x2', 
		'y', ' ', '\x3', '\x2', '\x2', '\x2', 'z', '{', '\a', '\x30', '\x2', '\x2', 
		'{', '|', '\t', '\x5', '\x2', '\x2', '|', '}', '\a', '\x30', '\x2', '\x2', 
		'}', '\"', '\x3', '\x2', '\x2', '\x2', '~', '\x7F', '\a', '\x30', '\x2', 
		'\x2', '\x7F', '\x83', '\t', '\x4', '\x2', '\x2', '\x80', '\x82', '\t', 
		'\x6', '\x2', '\x2', '\x81', '\x80', '\x3', '\x2', '\x2', '\x2', '\x82', 
		'\x85', '\x3', '\x2', '\x2', '\x2', '\x83', '\x81', '\x3', '\x2', '\x2', 
		'\x2', '\x83', '\x84', '\x3', '\x2', '\x2', '\x2', '\x84', '\x86', '\x3', 
		'\x2', '\x2', '\x2', '\x85', '\x83', '\x3', '\x2', '\x2', '\x2', '\x86', 
		'\x87', '\a', '\x30', '\x2', '\x2', '\x87', '$', '\x3', '\x2', '\x2', 
		'\x2', '\x88', '\x8A', '\a', '/', '\x2', '\x2', '\x89', '\x88', '\x3', 
		'\x2', '\x2', '\x2', '\x89', '\x8A', '\x3', '\x2', '\x2', '\x2', '\x8A', 
		'\x8B', '\x3', '\x2', '\x2', '\x2', '\x8B', '\x8D', '\x5', '\x15', '\v', 
		'\x2', '\x8C', '\x8E', '\a', '\x30', '\x2', '\x2', '\x8D', '\x8C', '\x3', 
		'\x2', '\x2', '\x2', '\x8D', '\x8E', '\x3', '\x2', '\x2', '\x2', '\x8E', 
		'\x92', '\x3', '\x2', '\x2', '\x2', '\x8F', '\x91', '\x5', '\x15', '\v', 
		'\x2', '\x90', '\x8F', '\x3', '\x2', '\x2', '\x2', '\x91', '\x94', '\x3', 
		'\x2', '\x2', '\x2', '\x92', '\x90', '\x3', '\x2', '\x2', '\x2', '\x92', 
		'\x93', '\x3', '\x2', '\x2', '\x2', '\x93', '\x9A', '\x3', '\x2', '\x2', 
		'\x2', '\x94', '\x92', '\x3', '\x2', '\x2', '\x2', '\x95', '\x97', '\t', 
		'\a', '\x2', '\x2', '\x96', '\x98', '\a', '/', '\x2', '\x2', '\x97', '\x96', 
		'\x3', '\x2', '\x2', '\x2', '\x97', '\x98', '\x3', '\x2', '\x2', '\x2', 
		'\x98', '\x99', '\x3', '\x2', '\x2', '\x2', '\x99', '\x9B', '\x5', '\x15', 
		'\v', '\x2', '\x9A', '\x95', '\x3', '\x2', '\x2', '\x2', '\x9A', '\x9B', 
		'\x3', '\x2', '\x2', '\x2', '\x9B', '&', '\x3', '\x2', '\x2', '\x2', '\x9C', 
		'\x9D', '\a', '\x46', '\x2', '\x2', '\x9D', '\x9E', '\a', '\x43', '\x2', 
		'\x2', '\x9E', '\x9F', '\a', 'V', '\x2', '\x2', '\x9F', '\xA0', '\a', 
		'\x43', '\x2', '\x2', '\xA0', '(', '\x3', '\x2', '\x2', '\x2', '\xA1', 
		'\xA2', '\a', 'G', '\x2', '\x2', '\xA2', '\xA3', '\a', 'P', '\x2', '\x2', 
		'\xA3', '\xA4', '\a', '\x46', '\x2', '\x2', '\xA4', '\xA5', '\a', 'U', 
		'\x2', '\x2', '\xA5', '\xA6', '\a', 'G', '\x2', '\x2', '\xA6', '\xA7', 
		'\a', '\x45', '\x2', '\x2', '\xA7', '*', '\x3', '\x2', '\x2', '\x2', '\xA8', 
		'\xA9', '\a', 'H', '\x2', '\x2', '\xA9', '\xAA', '\a', 'K', '\x2', '\x2', 
		'\xAA', '\xAB', '\a', 'N', '\x2', '\x2', '\xAB', '\xAC', '\a', 'G', '\x2', 
		'\x2', '\xAC', '\xAD', '\a', '\x61', '\x2', '\x2', '\xAD', '\xAE', '\a', 
		'\x46', '\x2', '\x2', '\xAE', '\xAF', '\a', 'G', '\x2', '\x2', '\xAF', 
		'\xB0', '\a', 'U', '\x2', '\x2', '\xB0', '\xB1', '\a', '\x45', '\x2', 
		'\x2', '\xB1', '\xB2', '\a', 'T', '\x2', '\x2', '\xB2', '\xB3', '\a', 
		'K', '\x2', '\x2', '\xB3', '\xB4', '\a', 'R', '\x2', '\x2', '\xB4', '\xB5', 
		'\a', 'V', '\x2', '\x2', '\xB5', '\xB6', '\a', 'K', '\x2', '\x2', '\xB6', 
		'\xB7', '\a', 'Q', '\x2', '\x2', '\xB7', '\xB8', '\a', 'P', '\x2', '\x2', 
		'\xB8', ',', '\x3', '\x2', '\x2', '\x2', '\xB9', '\xBA', '\a', 'H', '\x2', 
		'\x2', '\xBA', '\xBB', '\a', 'K', '\x2', '\x2', '\xBB', '\xBC', '\a', 
		'N', '\x2', '\x2', '\xBC', '\xBD', '\a', 'G', '\x2', '\x2', '\xBD', '\xBE', 
		'\a', '\x61', '\x2', '\x2', '\xBE', '\xBF', '\a', 'P', '\x2', '\x2', '\xBF', 
		'\xC0', '\a', '\x43', '\x2', '\x2', '\xC0', '\xC1', '\a', 'O', '\x2', 
		'\x2', '\xC1', '\xC2', '\a', 'G', '\x2', '\x2', '\xC2', '.', '\x3', '\x2', 
		'\x2', '\x2', '\xC3', '\xC4', '\a', 'H', '\x2', '\x2', '\xC4', '\xC5', 
		'\a', 'K', '\x2', '\x2', '\xC5', '\xC6', '\a', 'N', '\x2', '\x2', '\xC6', 
		'\xC7', '\a', 'G', '\x2', '\x2', '\xC7', '\xC8', '\a', '\x61', '\x2', 
		'\x2', '\xC8', '\xC9', '\a', 'U', '\x2', '\x2', '\xC9', '\xCA', '\a', 
		'\x45', '\x2', '\x2', '\xCA', '\xCB', '\a', 'J', '\x2', '\x2', '\xCB', 
		'\xCC', '\a', 'G', '\x2', '\x2', '\xCC', '\xCD', '\a', 'O', '\x2', '\x2', 
		'\xCD', '\xCE', '\a', '\x43', '\x2', '\x2', '\xCE', '\x30', '\x3', '\x2', 
		'\x2', '\x2', '\xCF', '\xD0', '\a', 'J', '\x2', '\x2', '\xD0', '\xD1', 
		'\a', 'G', '\x2', '\x2', '\xD1', '\xD2', '\a', '\x43', '\x2', '\x2', '\xD2', 
		'\xD3', '\a', '\x46', '\x2', '\x2', '\xD3', '\xD4', '\a', 'G', '\x2', 
		'\x2', '\xD4', '\xD5', '\a', 'T', '\x2', '\x2', '\xD5', '\x32', '\x3', 
		'\x2', '\x2', '\x2', '\xD6', '\xD7', '\a', '%', '\x2', '\x2', '\xD7', 
		'\xD8', '\x5', '\x15', '\v', '\x2', '\xD8', '\x34', '\x3', '\x2', '\x2', 
		'\x2', '\xD9', '\xDA', '\a', 'K', '\x2', '\x2', '\xDA', '\xDB', '\a', 
		'U', '\x2', '\x2', '\xDB', '\xDC', '\a', 'Q', '\x2', '\x2', '\xDC', '\xDD', 
		'\x3', '\x2', '\x2', '\x2', '\xDD', '\xDE', '\a', '/', '\x2', '\x2', '\xDE', 
		'\xDF', '\x5', '\x15', '\v', '\x2', '\xDF', '\xE0', '\a', '/', '\x2', 
		'\x2', '\xE0', '\xE1', '\x5', '\x15', '\v', '\x2', '\xE1', '\xE2', '\a', 
		'=', '\x2', '\x2', '\xE2', '\x36', '\x3', '\x2', '\x2', '\x2', '\xE3', 
		'\xE4', '\a', 'G', '\x2', '\x2', '\xE4', '\xE5', '\a', 'P', '\x2', '\x2', 
		'\xE5', '\xE6', '\a', '\x46', '\x2', '\x2', '\xE6', '\xE7', '\a', '/', 
		'\x2', '\x2', '\xE7', '\xE8', '\a', 'K', '\x2', '\x2', '\xE8', '\xE9', 
		'\a', 'U', '\x2', '\x2', '\xE9', '\xEA', '\a', 'Q', '\x2', '\x2', '\xEA', 
		'\xEB', '\x3', '\x2', '\x2', '\x2', '\xEB', '\xEC', '\a', '/', '\x2', 
		'\x2', '\xEC', '\xED', '\x5', '\x15', '\v', '\x2', '\xED', '\xEE', '\a', 
		'/', '\x2', '\x2', '\xEE', '\xEF', '\x5', '\x15', '\v', '\x2', '\xEF', 
		'\xF0', '\a', '=', '\x2', '\x2', '\xF0', '\x38', '\x3', '\x2', '\x2', 
		'\x2', '\xF1', '\xF5', '\a', '$', '\x2', '\x2', '\xF2', '\xF4', '\x5', 
		'\x19', '\r', '\x2', '\xF3', '\xF2', '\x3', '\x2', '\x2', '\x2', '\xF4', 
		'\xF7', '\x3', '\x2', '\x2', '\x2', '\xF5', '\xF3', '\x3', '\x2', '\x2', 
		'\x2', '\xF5', '\xF6', '\x3', '\x2', '\x2', '\x2', '\xF6', '\xF8', '\x3', 
		'\x2', '\x2', '\x2', '\xF7', '\xF5', '\x3', '\x2', '\x2', '\x2', '\xF8', 
		'\xF9', '\a', '$', '\x2', '\x2', '\xF9', ':', '\x3', '\x2', '\x2', '\x2', 
		'\xFA', '\xFF', '\x5', '\x1B', '\xE', '\x2', '\xFB', '\xFE', '\x5', '\x1B', 
		'\xE', '\x2', '\xFC', '\xFE', '\x5', '\x13', '\n', '\x2', '\xFD', '\xFB', 
		'\x3', '\x2', '\x2', '\x2', '\xFD', '\xFC', '\x3', '\x2', '\x2', '\x2', 
		'\xFE', '\x101', '\x3', '\x2', '\x2', '\x2', '\xFF', '\xFD', '\x3', '\x2', 
		'\x2', '\x2', '\xFF', '\x100', '\x3', '\x2', '\x2', '\x2', '\x100', '<', 
		'\x3', '\x2', '\x2', '\x2', '\x101', '\xFF', '\x3', '\x2', '\x2', '\x2', 
		'\x102', '\x103', '\a', '&', '\x2', '\x2', '\x103', '>', '\x3', '\x2', 
		'\x2', '\x2', '\x104', '\x108', '\a', ')', '\x2', '\x2', '\x105', '\x107', 
		'\v', '\x2', '\x2', '\x2', '\x106', '\x105', '\x3', '\x2', '\x2', '\x2', 
		'\x107', '\x10A', '\x3', '\x2', '\x2', '\x2', '\x108', '\x109', '\x3', 
		'\x2', '\x2', '\x2', '\x108', '\x106', '\x3', '\x2', '\x2', '\x2', '\x109', 
		'\x10B', '\x3', '\x2', '\x2', '\x2', '\x10A', '\x108', '\x3', '\x2', '\x2', 
		'\x2', '\x10B', '\x10C', '\a', ')', '\x2', '\x2', '\x10C', '@', '\x3', 
		'\x2', '\x2', '\x2', '\x10D', '\x10F', '\t', '\b', '\x2', '\x2', '\x10E', 
		'\x10D', '\x3', '\x2', '\x2', '\x2', '\x10F', '\x110', '\x3', '\x2', '\x2', 
		'\x2', '\x110', '\x10E', '\x3', '\x2', '\x2', '\x2', '\x110', '\x111', 
		'\x3', '\x2', '\x2', '\x2', '\x111', '\x112', '\x3', '\x2', '\x2', '\x2', 
		'\x112', '\x113', '\b', '!', '\x2', '\x2', '\x113', '\x42', '\x3', '\x2', 
		'\x2', '\x2', '\x114', '\x116', '\t', '\t', '\x2', '\x2', '\x115', '\x114', 
		'\x3', '\x2', '\x2', '\x2', '\x116', '\x117', '\x3', '\x2', '\x2', '\x2', 
		'\x117', '\x115', '\x3', '\x2', '\x2', '\x2', '\x117', '\x118', '\x3', 
		'\x2', '\x2', '\x2', '\x118', '\x119', '\x3', '\x2', '\x2', '\x2', '\x119', 
		'\x11A', '\b', '\"', '\x2', '\x2', '\x11A', '\x44', '\x3', '\x2', '\x2', 
		'\x2', '\x11B', '\x11C', '\a', '\x31', '\x2', '\x2', '\x11C', '\x11D', 
		'\a', ',', '\x2', '\x2', '\x11D', '\x121', '\x3', '\x2', '\x2', '\x2', 
		'\x11E', '\x120', '\v', '\x2', '\x2', '\x2', '\x11F', '\x11E', '\x3', 
		'\x2', '\x2', '\x2', '\x120', '\x123', '\x3', '\x2', '\x2', '\x2', '\x121', 
		'\x122', '\x3', '\x2', '\x2', '\x2', '\x121', '\x11F', '\x3', '\x2', '\x2', 
		'\x2', '\x122', '\x124', '\x3', '\x2', '\x2', '\x2', '\x123', '\x121', 
		'\x3', '\x2', '\x2', '\x2', '\x124', '\x125', '\a', ',', '\x2', '\x2', 
		'\x125', '\x126', '\a', '\x31', '\x2', '\x2', '\x126', '\x127', '\x3', 
		'\x2', '\x2', '\x2', '\x127', '\x128', '\b', '#', '\x2', '\x2', '\x128', 
		'\x46', '\x3', '\x2', '\x2', '\x2', '\x13', '\x2', '^', '\x62', '\x81', 
		'\x83', '\x89', '\x8D', '\x92', '\x97', '\x9A', '\xF5', '\xFD', '\xFF', 
		'\x108', '\x110', '\x117', '\x121', '\x3', '\b', '\x2', '\x2',
	};

	public static readonly ATN _ATN =
		new ATNDeserializer().Deserialize(_serializedATN);


}
} // namespace STEP
