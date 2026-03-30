/**
 * ホストオブジェクトは `SV` という名前のグローバルオブジェクトで, スクリプトのどこからでもアクセスできます。
 */
declare const SV: {
  /**
   * 4 分音符のブリック数 (705600000) 。
   */
  QUARTER: number;

  /**
   * 鍵盤 (MIDI ノート番号) がピアノの黒鍵かどうかを確認します。
   */
  blackKey(k: number): boolean;

  /**
   * ブリックの数 `b` を 4 分音符の数に変換します。
   */
  blick2Quarter(b: number): number;

  /**
   * 指定された` bpm` を使い, ブリックの数 `b` を秒に変換します。
   */
  blick2Seconds(b: number, bpm: number): number;

  /**
   * `dividend` (ブリック) 割る `divisor` (ブリック) を丸めたもの。
   */
  blickRoundDiv(dividend: number, divisor: number): number;

  /**
   * `b` (ブリック) に最も近い `interval` (ブリック) の倍数を返します。
   */
  blickRoundTo(b: number, interval: number): number;

  /**
   * スクリプトパネルを再描画する（2026-03-30）
   */
  refreshSidePanel(): void;

  /**
   * WidgetValue（UI用の仮想オブジェクト）の型の追加（2026-03-30）
   */
  create(type: "WidgetValue"): WidgetValue;


  /**
   * 新しくオブジェクトを作成します。
   */
  create(
    type: "Note"
  ): Note;
  create(
    type: "Automation"
  ): Automation;
  create(
    type: "NoteGroup"
  ): NoteGroup;
  create(
    type: "NoteGroupReference"
  ): NoteGroupReference;
  create(
    type: "TrackMixer"
  ): object;
  create(
    type: "Track"
  ): Track;
  create(
    type: "TimeAxis"
  ): TimeAxis;
  create(
    type: "Project"
  ): Project;

  /**
   * スクリプトの終了を示します。
   */
  finish(): void;

  /**
   * 周波数 (単位: Hz) を MIDI ノート番号 (単位: 半音, C4 は 60) に変換します。
   */
  freq2Pitch(f: number): number;

  /**
   * トラックエリアの UI 状態オブジェクトを取得します。
   */
  getArrangement(): ArrangementView;

  /**
   * システムクリップボードのテキストを取得します。
   */
  getHostClipboard(): string;

  /**
   * 以下のプロパティを持つオブジェクトを取得します。
   */
  getHostInfo(): {
    osType: "Windows" | "macOS" | "Linux" | "Unknown";
    osName: string;
    hostName: "Synthesizer V Studio Pro" | "Synthesizer V Studio Basic";
    hostVersion: string;
    hostVersionNumber: number;
    languageCode: string;
  };

  /**
   * ピアノロールの UI 状態オブジェクトを取得します。
   */
  getMainEditor(): MainEditorView;

  /**
   * グループ内のすべてのノートの音素を取得します。
   */
  getPhonemesForGroup(group: NoteGroupReference): Array<string>;

  /**
   * プレイバックを制御するための UI 状態オブジェクトを取得します。
   */
  getPlayback(): PlayBackControl;

  /**
   * 現在開いているプロジェクトを取得します。
   */
  getProject(): Project;

  /**
   * MIDI ノート番号 (単位: 半音, C4 は 60) を周波数 (単位: Hz) に変換します。
   */
  pitch2freq(p: number): number;

  /**
   * 4 分音符の数 `q` をブリックの数に変換します。
   */
  quarter2Blick(q: number): number;

  /**
   * 指定された `bpm` を使い, 秒 `s` をブリックの数に変換します。
   */
  seconds2Blick(s: number, bpm: number): number;

  /**
   * システムクリップボードにテキストを置きます。
   */
  setHostClipboard(text: string): void;

  /**
   * `timeOut` ミリ秒後の `callback` 遅延呼び出しをスケジュールする。
   */
  // setTimeout(timeOut: number, callback: () => any): void;
  setTimeout(timeOut: number, callback: () => void): void;  // 2026-03-30 変更

  /**
   * ユーザーがダイアログを閉じるまでスクリプトの実行をブロックする `SV.showCustomDialogAsync` の同期バージョン。
   */
  showCustomDialog(form: Form): FormResult;

  /**
   * `form` で定義されたカスタムダイアログを, スクリプトの実行をブロックせずに表示します。
   */
  showCustomDialogAsync(form: Form, callback: () => any): void;

  /**
   * ユーザーがダイアログを閉じるまでスクリプトの実行をブロックする `SV.showInputBoxAsync` の同期バージョン。
   */
  showInputBox(title: string, message: string, defaultText: string): string;

  /**
   * スクリプトの実行をブロックせずに, テキストボックスと「OK」ボタンのあるダイアログを表示します。
   */
  showInputBoxAsync(title: string, message: string, defaultText: string, callback: (input) => any): void;

  /**
   * ユーザーがメッセージボックスを閉じるまでスクリプトの実行をブロックする `SV.showMessageBoxAsync` の同期バージョン。
   */
  showMessageBox(title: string, message: string): void;

  /**
   * スクリプトの実行をブロックせずにメッセージボックスをポップアップさせます。
   */
  showMessageBoxAsync(title: string, message: string, callback?: () => any): void;

  /**
   * ユーザーがメッセージボックスを閉じるまでスクリプトの実行をブロックする `SV.showOkCancelBoxAsync` の同期バージョン。
   */
  showOkCancelBox(title: string, message: string): boolean;

  /**
   * スクリプトの実行をブロックせずに, 「確定」ボタンと「キャンセル」ボタン付きのメッセージボックスを表示します。
   */
  showOkCancelBoxAsync(title: string, message: string, callback: (result: boolean) => any): void;

  /**
   * ユーザーがメッセージボックスを閉じるまでスクリプトの実行をブロックする `SV.showYesNoCancelBoxAsync` の同期バージョン。
   */
  showYesNoCancelBox(title: string, message: string): "Yes" | "No" | "Cancel";

  /**
   * スクリプトの実行を妨げることなく, 「はい」ボタン, 「いいえ」ボタン, 「キャンセル」ボタンを備えたメッセージボックスを表示します。
   */
  showYesNoCancelBoxAsync(title: string, message: string, callback: (result: "Yes" | "No" | "Cancel") => any): void;

  /**
   * 現在の UI 言語設定に基づいてローカライズされた `text` を取得します。
   */
  T(text: string): string;
};


type Form = {

  /**
   * ダイアログのタイトル。
   */
  title: string;

  /**
   * ダイアログの上部に表示されるメッセージ。
   */
  message?: string; // オプションの追加を許容（2026-03-30）
  // message: string;

  /**
   * ダイアログの下部に表示されているプリセットボタン。
   */
  buttons: string; // "YesNoCancel" | "OkCancel"; から変更（2026-03-30）
  // buttons: "YesNoCancel" | "OkCancel";

  /**
   * ダイアログの主部に表示されるウィジェットの配列。
   */
  widgets: Array<
    | {
      name: string;
      type: "Slider";
      label: string;
      format: string;
      minValue: number;
      maxValue: number;
      interval: number;
      default: number;
    }
    | {
      name: string;
      type: "ComboBox";
      label: string;
      choices: Array<string>;
      default: number;
    }
    | {
      name: string;
      type: "TextBox";
      label: string;
      default: string;
    }
    | {
      name: string;
      type: "TextArea";
      label: string;
      height: number;
      default: string;
    }
    | {
      name: string;
      type: "CheckBox";
      text: string;
      default: boolean;
    }
    // 拡張（2026-03-30）
    | {
      name: string;
      type: string;
      label?: string;
      text?: string;
      default?: any;
      readOnly?: boolean;
      format?: string;
      minValue?: number;
      maxValue?: number;
      interval?: number;
      height?: number;
      choices?: Array<string>;
    }
  >;
}

type FormResult = {
  status: "Yes" | "No" | "Ok" | "Cancel";
  answers: { [key: string]: any };
}

/**
 * トラックエリアの選択状態オブジェクト。
 */
interface ArrangementSelectionState extends NestedObject, SelectionStateBase, GroupSelection {
  /**
   * この選択状態が対応しているすべてのオブジェクトタイプについて, 該当するオブジェクトの選択を解除します。
   * 選択に変更があった場合は真を返します。
   */
  clearAll(): boolean;

  /**
   * すべての `NoteGroupReference` の選択を解除します。
   * 選択範囲に変更があれば真を返します。
   */
  clearGroups(): boolean;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 親 `NestedObject` を取得します。
   * 現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 選択された `NoteGroupReference` の配列を, 選択順にしたがって取得します。
   */
  getSelectedGroups(): Array<NoteGroupReference>;

  /**
   * 選択されているものがあるかどうか確認します。
   */
  hasSelectedContent(): boolean;

  /**
   * `NoteGroupReference` が1つ以上選択されているか確認します。
   */
  hasSelectedGroups(): boolean;

  /**
   * 選択されたオブジェクトに未完了の編集があるかどうか確認します。
   * 例えば, ユーザがいくつかのノート / 制御点をドラッグしており, まだマウスを離していない場合, 真を返します。
   */
  hasUnfinishedEdits(): boolean;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * 選択に `NoteGroupReference` を追加します。
   * 引数は, 現在開いているプロジェクトに含まれている必要があります。
   */
  selectGroup(reference: NoteGroupReference): void;

  /**
   * `NoteGroupReference` の選択を解除します。
   * 選択範囲に変更があれば真を返します。
   */
  unselectGroup(reference: NoteGroupReference): boolean;
}

/**
 * トラックエリアビューの UI 状態オブジェクト。
 */
interface ArrangementView extends NestedObject {
  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * トラックエリアの座標系を取得します。
   */
  getNavigation(): CoordinateSystem;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * トラックエリアの選択状態オブジェクトを取得します。
   */
  getSelection(): ArrangementSelectionState;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;
}

/**
 * `NoteGroup` 内の特定のパラメータタイプ (ピッチベンドなど) を制御する点の集合。
 */
interface Automation extends NestedObject {

  /**
   * 位置 `b` (ブリック) とパラメータ値 `v` の制御点を追加します。`b` 上にすでに制御点がある場合, パラメータ値を `v` に更新します。
   * 新しく制御点が作成された場合は真を返します。
   */
  add(b: number, v: number): boolean;

  /**
   * 現在のオブジェクトの深いコピー。
   */
  clone(): Automation;

  /**
   * 位置 `b` (ブリック) での補間されたパラメータ値を取得します。もちろん `b` に制御点が存在する場合, 補間方法にかかわらず, その点のパラメータ値を返します。
   */
  get(b: number): number;

  /**
   * `Automation.getPoints` の範囲無制限バージョン。
   */
  getAllPoints(): Array<Array<number>>;

  /**
   * 以下のプロパティを持つオブジェクトを取得します。
   * - displayName: string
   * - typeName: string
   * - range: 長さ 2 の要素が number の array
   * - defaultValue: number
   * 
   * | displayName |	typeName |	range |	単位 / パラメータ値の意味 |	defaultValue |
   * | ------------|-----------|--------|----------------------|--------------|
   * | "Pitch Deviation" |	"pitchDelta" |	-1200, 1200 |	cents |	0 |
   * | "Vibrato Envelope" |	"vibratoEnv" |	0, 2 |	x |	1 |
   * | "Loudness" |	"loudness" |	-48, 12 |	dB |	0 |
   * | "Tension" |	"tension" |	-1.0, 1.0 |	張り詰める <-> ゆったり |	0 |
   * | "Breathiness" |	"breathiness" |	-1.0, 1.0 |	ささやき <-> ハキハキ |	0 |
   * | "Voicing" |	"voicing" |	0.0, 1.0 |	有声音 <-> 無声音 |	1 |
   * | "Gender" |	"gender" |	-1.0, 1.0 |	男声 <-> 女声 |	0 |
   */
  getDefinition(): {
    displayName: "Pitch Deviation";
    typeName: "pitchDelta";
    range: [-1200, 1200];
    defaultValue: 0;
  } | {
    displayName: "Vibrato Envelope";
    typeName: "vibratoEnv";
    range: [0, 2];
    defaultValue: 1;
  } | {
    displayName: "Loudness";
    typeName: "loudness";
    range: [-48, 12];
    defaultValue: 0;
  } | {
    displayName: "Tension";
    typeName: "tension";
    range: [-1.0, 1.0];
    defaultValue: 0;
  } | {
    displayName: "Breathiness";
    typeName: "breathiness";
    range: [-1.0, 1.0];
    defaultValue: 0;
  } | {
    displayName: "Voicing";
    typeName: "voicing";
    range: [0.0, 1.0];
    defaultValue: 1;
  } | {
    displayName: "Gender";
    typeName: "gender";
    range: [-1.0, 1.0];
    defaultValue: 0;
  };

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 制御点間の値の補間方法を返します。
   */
  getInterpolationMethod(): "Linear" | "Cosine" | "Cubic";

  /**
   * `Automation.get` の線形補間を使用したバージョン (たとえ `Automation.getInterpolationMethod` が `"Linear"` でない場合でも) 。
   */
  getLinear(b: number): number;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 位置が `begin` と `end` (ブリック) の間にある制御点の配列を取得します、配列の各要素は, 2つの要素 
   * - 位置 (ブリック): `number`
   * - パラメータ値: `number`
   * からなる配列です。例: `[[0, 0.1], [5000, 0], [10000, -0.1]]`。
   */
  getPoints(begin: number, end: number): Array<[number, number]>;

  /**
   * この `Automation` のパラメータ型を取得します。`Automation.getDefinition` のテーブルの `typeName` 列を参照してください。
   */
  getType(): "pitchDelta" | "vibratoEnv" | "loudness" | "tension" | "breathiness" | "voicing" | "gender";

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * 位置 `b` (ブリック) に制御点がある場合, その制御点を削除します。削除された制御点があれば真を返します。
   */
  remove(b: number): boolean;

  /**
   * 位置 `begin` (ブリック) と `end` (ブリック) の間のすべての制御点を削除します。削除された制御点があれば真を返します。指定した範囲内に制御点がない場合は偽を返します。
   */
  remove(begin: number, end: number): boolean;

  /**
   * `Automation` の制御点をすべて削除します。
   */
  removeAll(): void;

  /**
   * 位置 `begin` (ブリック) から位置 `end` (ブリック) までのパラメータ曲線を, 曲線の形状に大きく寄与しない制御点を削除することで簡素化します。`threshold` が指定されない場合は `0.002` が使われます。`threshold` の値を高くすると, より簡素化されます。削除された制御点があれば真を返します。
   */
  simplify(begin: number, end: number, threshold?: number): boolean;
}

/**
 * x 軸が時間, y 軸が値の2次元スクロール可能な領域のナビゲーション用の UI 状態オブジェクト。どちらにおいても, x 軸の単位はブリックです。
 * ピアノロール (`MainEditorView`) やトラックエリア (`ArrangementView`) で使用します。ただし, トラックエリアにおいては x 軸についてのみ `CoordinateSystem` が使用されます。
 */
interface CoordinateSystem extends NestedObject {

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 水平方向の拡大率を取得します。
   * 単位は 1 ブリックあたりの画素数なので, 非常に小さな数字になります。
   */
  getTimePxPerUnit(): number;

  /**
   * 現在表示されている時間範囲を取得します。開始時刻と終了時刻に対応する2つの `number` 要素を持つ配列を返します。時間の単位はブリックです。
   */
  getTimeViewRange(): Array<number>;

  /**
   * 鉛直方向の拡大率を取得します。
   * ピアノロールの場合, 単位は半音あたりの画素数です。
   */
  getValuePxPerUnit(): number;

  /**
   * 現在表示されている値の範囲を取得します。下限と上限に対応する2つの `number` 要素を持つ配列を返します。ピアノロールの場合, 単位は MIDI ノート番号です。
   */
  getValueViewRange(): Array<number>;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * 左端が `time` になるように表示範囲を移動します。
   */
  setTimeLeft(time: number): void;

  /**
   * 右端が `time` になるように表示範囲を移動します。
   */
  setTimeRight(time: number): void;

  /**
   * 水平方向の拡大率を `scale` に設定します。
   * 単位は 1 ブリックあたりの画素数なので, 非常に小さな数字になります。
   */
  setTimeScale(scale: number): void;

  /**
   * 鉛直方向の中心が `v` になるように表示範囲を移動します。
   */
  setValueCenter(v: number): void;

  /**
   * スナップ設定に基づいて時間位置 `b` を丸めます。
   */
  snap(b: number): number;

  /**
   * 時間位置を x 位置 (ピクセル) に変換します。
   */
  t2x(t: number): number;

  /**
   * 値を y 位置 (ピクセル) に変換します。
   */
  v2y(v: number): number;

  /**
   * x 位置 (ピクセル) を時間位置に変換します。
   */
  x2t(x: number): number;

  /**
   * y 位置 (ピクセル) を値に変換します。
   */
  y2v(y: number): number;
}

/**
 * グループ選択に関連したものです。
 */
interface GroupSelection {

  /**
   * すべての `NoteGroupReference` の選択を解除します。選択範囲に変更があれば真を返します。
   */
  clearGroups(): boolean;

  /**
   * 選択された `NoteGroupReference` の配列を, 選択順にしたがって取得します。
   */
  getSelectedGroups(): Array<NoteGroupReference>;

  /**
   * `NoteGroupReference` が 1 つ以上選択されているか確認します。
   */
  hasSelectedGroups(): boolean;

  /**
   * 選択に `NoteGroupReference` を追加します。引数は, 現在開いているプロジェクトに含まれている必要があります。
   */
  selectGroup(reference: NoteGroupReference): void;

  /**
   * `NoteGroupReference` の選択を解除します。選択範囲に変更があれば真を返します。
   */
  unselectGroup(reference: NoteGroupReference): boolean;
}


/**
 * ピアノロールの UI 状態オブジェクト。
 */
interface MainEditorView extends NestedObject {

  /**
   * ユーザーが現在作業している `NoteGroupReference` を取得します。ユーザーが `NoteGroupReference` を開いていない場合, 現在のトラックのメイングループを返します。
   */
  getCurrentGroup(): NoteGroupReference;

  /**
   * ピアノロールで開いている `Track` を取得します。
   */
  getCurrentTrack(): Track;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * ピアノロールの `CoordinateSystem` を取得します。
   */
  getNavigation(): CoordinateSystem;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * ピアノロールの選択状態オブジェクトを取得します。
   */
  getSelection(): TrackInnerSelectionState;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;
}

// --- MainEditorView の追加API（2026-03-30）---
interface MainEditorView {
  /**
   * 現在のトラックを設定する
   */
  setCurrentTrack(track: Track): void;

  /**
   * 現在の NoteGroup を設定する
   */
  setCurrentGroup(group: NoteGroupReference): void;
}


/**
 * `NestedObject` は, ホスト (Synthesizer V Studio) とクライアント (スクリプト環境) の間で受け渡すことができるすべてのオブジェクトの基底クラスです。プロジェクト内のすべてのものをインデックス化するためのツリー構造を実装しています。加えて, いくつかの UI 要素は `NestedObject` インターフェースを通して公開されています。
 */
interface NestedObject {

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;
}

/**
 * ピッチ, 歌詞, 開始位置, 長さなどで定義された音符。`NoteGroup` の中に配置されます。
 */
interface Note extends NestedObject {

  /**
   * 現在のオブジェクトの深いコピー。
   */
  clone(): Note;

  /**
   * ートのプロパティを保持するオブジェクトを取得します。このオブジェクトには, 以下のプロパティがあります。
   */
  getAttributes(): {

    /**
     * ピッチ推移 - タイミング (秒)
     */
    tF0Offset: number;

    /**
     *  ピッチ推移 - 長さ左 (秒)
     */
    tF0Left: number;

    /**
     * ピッチ推移 - 長さ右 (秒)
     */
    tF0Right: number;

    /**
     * ピッチ推移 - 深さ左 (半音)
     */
    dF0Left: number;

    /**
     * ピッチ推移 - 深さ右 (半音)
     */
    dF0Right: number;

    /**
     * ビブラート - 開始タイミング (秒)
     */
    tF0VbrStart: number;

    /**
     * ビブラート - 左 (秒)
     */
    tF0VbrLeft: number;

    /**
     * ビブラート - 右 (秒)
     */
    tF0VbrRight: number;

    /**
     * ビブラート - 深さ (半音)
     */
    dF0Vbr: number;

    /**
     * ビブラート - 位相 (ラジアン, -π から π まで)
     */
    pF0Vbr: number;

    /**
     * ビブラート - 周波数 (Hz)
     */
    fF0Vbr: number;

    /**
     * タイミングと音素 - ノートオフセット (秒)
     */
    tNoteOffset: number;

    /**
     * 表現グループ
     */
    exprGroup?: string;

    /**
     * 音素長スケーリング用の要素 `number` の配列
     */
    dur: Array<number>;

    /**
     * 代替発音用の要素 `number` の配列
     */
    alt: Array<number>;

    /**
     * 言語オーバーライドを追加（2026-03-30）
     */
    languageOverride?: string;

  };

  /**
   * ノートの長さを取得します。単位はブリックです。
   */
  getDuration(): number;

  /**
   * ノートの終了位置 (開始位置 + 長さ) を取得します。単位はブリックです。
   */
  getEnd(): number;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 現在のノートの歌詞を取得します。
   */
  getLyrics(): string;

  /**
   * ノートの開始位置を取得します。単位はブリックです。
   */
  getOnset(): number;

  /**
   * 親 NestedObject を取得します。現在のオブジェクトが親に付いていない場合, undefined を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * ユーザがノートに設定した音素をスペース区切りで返します。例: "hh ah ll ow"。音素が設定されていない場合は, デフォルトの発音ではなく空の文字列を返します (`SV.getPhonemesForGroup` をご参照ください) 。
   */
  getPhonemes(): string;

  /**
   * ノートの音素を設定する（2026-03-30）
   */
  setPhonemes(phonemes: string): void;

  /**
   * ピッチを MIDI ノート番号で取得します。C4 は 60 に対応します。
   */
  getPitch(): number;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * 属性オブジェクトに基づいてノートプロパティを設定します。属性オブジェクトは完全である必要はありません。与えられたプロパティのみが更新されます。例えば, 
   * ```js
   * note.setAttributes({
   *   "tF0Offset": 0.05,
   *   "exprGroup": "C4",
   *   "alt": [0, 1]
   * });
   * ```
   */
  setAttributes(attributes: {

    /**
     * ピッチ推移 - タイミング (秒)
     */
    tF0Offset?: number;

    /**
     * ピッチ推移 - 長さ左 (秒)
     */
    tF0Left?: number;

    /**
     * ピッチ推移 - 長さ右 (秒)
     */
    tF0Right?: number;

    /**
     * ッチ推移 - 深さ左 (半音)
     */
    dF0Left?: number;

    /**
     * ピッチ推移 - 深さ右 (半音)
     */
    dF0Right?: number;

    /**
     * ビブラート - 開始タイミング (秒)
     */
    tF0VbrStart?: number;

    /**
     * ビブラート - 左 (秒)
     */
    tF0VbrLeft?: number;

    /**
     * ビブラート - 右 (秒)
     */
    tF0VbrRight?: number;

    /**
     * ビブラート - 深さ (半音)
     */
    dF0Vbr?: number;

    /**
     * ビブラート - 位相 (ラジアン, -π から π まで)
     */
    pF0Vbr?: number;

    /**
     * ビブラート - 周波数 (Hz)
     */
    fF0Vbr?: number;

    /**
     * タイミングと音素 - ノートオフセット (秒)
     */
    tNoteOffset?: number;

    /**
     * 表現グループ
     */
    exprGroup?: string;

    /**
     * 音素長スケーリング用の要素 `number` の配列
     */
    dur?: Array<number>;

    /**
     * 代替発音用の要素 `number` の配列
     */
    alt?: Array<number>;
  }): void;

  /**
   * ノートの長さを `t` に変更します。単位はブリックです。終了位置も変更されますが, 開始位置は変更されません。
   */
  setDuration(t: number): void;

  /**
   * 歌詞を変更します。
   */
  setLyrics(lyrics: string): void;

  /**
   * ノートを `t` から始まるように移動します。単位はブリックです。長さは変わりません。
   */
  setOnset(t: number): void;

  /**
   * 音素を `phoneme_str` に変更します。例: "hh ah ll ow "。
   */
  setPhonemes(phoneme_str: string): void;

  /**
   * ピッチを MIDI ノート番号 `pitchNumber` に設定します。
   */
  setPitch(pitchNumber: number): void;

  /**
   * 開始位置と長さの両方を設定します。`setOnset(onset)` と `setDuration(duration)` の両方を呼び出すのと同じです。
   */
  setTimeRange(onset: number, duration: number): void;
}

/**
 * ノート (`Note`) とパラメータ (`Automation`) をグループ化し, 再利用できるようにしたもの。`NoteGroup` を` Track` の中に配置するには, そのグループの文脈 (音声, 言語, 時間, ピッチオフセットなど) を提供する `NoteGroupReference` でラップしなければなりません。
 */
interface NoteGroup extends NestedObject {

  /**
   * この `NoteGroup` にノートを追加し, 追加したノートの添え字を返します。ノートは, 開始位置について昇順にソートされています。
   */
  addNote(note: Note): number;

  /**
   * 現在のオブジェクトの深いコピー。
   */
  clone(): NoteGroup;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * ユーザが設定したこの `NoteGroup` の名前を取得する。
   */
  getName(): string;

  /**
   * 添え字が `index` のノートを取得します。`NoteGroup` 内のノートは常に開始位置の順でソートされます。
   */
  // getNote(index: number): Note;
  getNote(index: number): Note; // 2026-03-30 変更

  /**
   * `NoteGroup` のノートの数を取得します。
   */
  getNumNotes(): number;

  /**
   * パラメータ `type` の `Automation` オブジェクトを取得します。大文字小文字は区別されません。`type` は `Automation.getDefinition` にあるテーブルの `typeName` 列中のいずれかの文字列でなければならない。
   */
  getParameter(type: "pitchDelta" | "vibratoEnv" | "loudness" | "tension" | "breathiness" | "voicing" | "gender"): Automation;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * Universally Unique Identifier を取得します。名前とは違い, UUID はプロジェクト全体で一意なので, `NoteGroupReference` と `NoteGroup` を関連付けるために使用することができます。UUIDは次のようなものになります: `"ab85d637-d80b-4628-9c27-007ea74029af"`。
   */
  getUUID(): string;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * 添え字が `index` のノートを削除します。
   */
  removeNote(index: number): void;

  /**
   * この `NoteGroup` の名前を設定します。
   */
  setName(name: string): void;
}

/**
 * 時間とピッチオフセット, および歌声 / データベースプロパティを持つ場合もある `NoteGroup` への参照。`NoteGroup` を言語コンテキストに置くので, 歌詞から音素への変換やレンダリングが可能になります。`NoteGroupReference` は常に `Track` の中に置かれます。`NoteGroup` は, 複数の `NoteGroupReference` によって参照されることがあります。
 */
interface NoteGroupReference extends NestedObject {

  /**
   * 現在のオブジェクトの深いコピー。注意: `NoteGroupReference` は参照対象 `NoteGroup` を所有していないので, `NoteGroup` をコピーしません。
   */
  clone(): NoteGroupReference;

  /**
   * 在の `NoteGroupReference` の長さ (ブリック) 。`getEnd() - getOnset()` に等しいです。
   */
  getDuration(): number;

  /**
   * 終了位置 (ブリック), つまり, 対象` NoteGroup` の最後のノートの終了位置に時間オフセットを加えたものを取得します。`NoteGroupReference` がオーディオファイル (`NoteGroupReference.isInstrumental`) を保持している場合, `getEnd()` はオーディオの終了位置 (ブリック) に時間オフセットを加えたものを返します。ただし, `NoteGroupReference` が `Project` の中に配置されていない場合, オーディオの長さを音楽的に意味のある時間単位で決定するのに情報が十分でなく, `getEnd()` は長さがオーディオの長さが `0` であると仮定してしまいます。
   */
  getEnd(): number;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 開始位置 (ブリック) を取得します。つまり, 対象 `NoteGroup` 内の最初の `Note` の開始位置 (ブリック) に時間オフセットを加えたものを取得します。
   */
  getOnset(): number;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 対象 (`NoteGroup` 内のすべてのノートに適用されるピッチシフト (半音) を取得します。
   */
  getPitchOffset(): number;

  /**
   * 参照対象の` NoteGroup` を取得します。
   */
  getTarget(): NoteGroup;

  /**
   * 対象 `NoteGroup` 内のすべてのノートに適用される時間オフセット (ブリック) を取得します。
   */
  getTimeOffset(): number;

  /**
   * 現在のグループのデフォルト歌声プロパティを保持するオブジェクトを取得します。`Note.getAttributes` と同様です。
   */
  getVoice(): {

    /**
     * ピッチ - 長さ左 (秒)
     */
    tF0Left: number;

    /**
     * ピッチ - 長さ右 (秒)
     */
    tF0Right: number;

    /**
     * ピッチ - 深さ左 (半音)
     */
    dF0Left: number;

    /**
     * ピッチ - 深さ右 (半音)
     */
    dF0Right: number;

    /**
     * ビブラート - 開始タイミング (秒)
     */
    tF0VbrStart: number;

    /**
     * ビブラート - 左 (秒)
     */
    tF0VbrLeft: number;

    /**
     * ビブラート - 右 (秒)
     */
    tF0VbrRight: number;

    /**
     * ビブラート - 深さ (半音)
     */
    dF0Vbr: number;

    /**
     * ビブラート - 周波数 (Hz)
     */
    fF0Vbr: number;

    /**
     * パラメータ - ラウドネス (dB)
     */
    paramLoudness: number;

    /**
     * パラメータ - テンション
     */
    paramTension: number;

    /**
     * パラメータ - ブレス
     */
    paramBreathiness: number;

    /**
     * パラメータ - ジェンダー
     */
    paramGender: number;
  };

  /**
   * この `NoteGroupReference` が外部のオーディオファイルを参照しているかどうか。そうである場合, `NoteGroup` は参照対象とならない。
   */
  isInstrumental(): boolean;

  /**
   * この `NoteGroupReference` が親 `Track` のメイングループを参照対象としているかどうか。
   */
  isMain(): boolean;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * ピッチオフセットを `pitchOffset` (半音) に設定する。
   */
  setPitchOffset(pitchOffset: number): void;

  /**
   * 参照対象の `NoteGroup` を設定します。一度設定した参照対象は変更できないことに注意してください。
   */
  setTarget(group: NoteGroup): void;

  /**
   * 時間オフセットを `blickOffset` (ブリック) に設定します。
   */
  setTimeOffset(blickOffset: number): void;

  /**
   * 属性オブジェクトに基づいて歌声プロパティを設定します (`NoteGroupReference.getVoice` を参照) 。属性オブジェクトは完全である必要はありません。与えられたプロパティのみが更新されます (`Note.setAttributes` を参照) 。
   */
  setVoice(attributes: {

    /**
     * ピッチ - 長さ左 (秒)
     */
    tF0Left?: number;

    /**
     * ピッチ - 長さ右 (秒)
     */
    tF0Right?: number;

    /**
     * ピッチ - 深さ左 (半音)
     */
    dF0Left?: number;

    /**
     * ピッチ - 深さ右 (半音)
     */
    dF0Right?: number;

    /**
     * ビブラート - 開始タイミング (秒)
     */
    tF0VbrStart?: number;

    /**
     * ビブラート - 左 (秒)
     */
    tF0VbrLeft?: number;

    /**
     * ビブラート - 右 (秒)
     */
    tF0VbrRight?: number;

    /**
     * ビブラート - 深さ (半音)
     */
    dF0Vbr?: number;

    /**
     * ビブラート - 周波数 (Hz)
     */
    fF0Vbr?: number;

    /**
     * パラメータ - ラウドネス (dB)
     */
    paramLoudness?: number;

    /**
     * パラメータ - テンション
     */
    paramTension?: number;

    /**
     * パラメータ - ブレス
     */
    paramBreathiness?: number;

    /**
     * パラメータ - ジェンダー
     */
    paramGender?: number;
  }): {

    /**
     * ピッチ - 長さ左 (秒)
     */
    tF0Left: number;

    /**
     * ピッチ - 長さ右 (秒)
     */
    tF0Right: number;

    /**
     * ピッチ - 深さ左 (半音)
     */
    dF0Left: number;

    /**
     * ピッチ - 深さ右 (半音)
     */
    dF0Right: number;

    /**
     * ビブラート - 開始タイミング (秒)
     */
    tF0VbrStart: number;

    /**
     * ビブラート - 左 (秒)
     */
    tF0VbrLeft: number;

    /**
     * ビブラート - 右 (秒)
     */
    tF0VbrRight: number;

    /**
     * ビブラート - 深さ (半音)
     */
    dF0Vbr: number;

    /**
     * ビブラート - 周波数 (Hz)
     */
    fF0Vbr: number;

    /**
     * パラメータ - ラウドネス (dB)
     */
    paramLoudness: number;

    /**
     * パラメータ - テンション
     */
    paramTension: number;

    /**
     * パラメータ - ブレス
     */
    paramBreathiness: number;

    /**
     * パラメータ - ジェンダー
     */
    paramGender: number;
  };

  // --- ScriptData 定義を追加（2026-03-30） ---
  /**
   * プロジェクトファイルに保存されるスクリプトデータを取得
   */
  getScriptData(key: string): string | null;
  /**
   * プロジェクトファイルに保存されるスクリプトデータを設定
   */
  setScriptData(key: string, value: string): void;
  /**
   * プロジェクトファイルに保存されるスクリプトデータを削除
   */
  removeScriptData(key: string): void;
}


/**
 * オーディオプレイバックを制御するための UI 状態オブジェクト。
 */
interface PlayBackControl extends NestedObject {

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 親 `NestedObject `を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 現在のプレイヘッドの位置を取得します (単位: 秒) 。単位をブリックに変換するには, 現在のプロジェクトの `TimeAxis` をお使いください。
   */
  getPlayhead(): number;

  /**
   * 現在のプレイバック状態を取得します。
   */
  getStatus(): "playing" | "looping" | "stopped";

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * `tBegin` と `tEnd` の間のループを開始する (単位: 秒) 。
   */
  loop(tBegin: number, tEnd: number): void;

  /**
   * 再生を停止しますが, プレイヘッドはリセットしません。
   */
  pause(): void;

  /**
   * オーディオの再生を開始します。
   */
  play(): void;

  /**
   * プレイヘッドの位置を `t` に設定します (単位: 秒) 。オーディオが再生中の場合, 一時停止はせずに, 新しい位置から再生をします。
   */
  seek(t: number): void;

  /**
   * 再生を停止し, 再生を開始した位置にプレイヘッドをリセットします。
   */
  stop(): void;
}

/**
 * 作業対象となる最大のオブジェクト。`Track`, `TimeAxis`, `NoteGroup` などが入っています。
 */
interface Project extends NestedObject {

  /**
   * プロジェクトライブラリの添え字 `suggestedIndex` の位置に `NoteGroup` を挿入します。`suggestedIndex` が与えられていない場合は, `NoteGroup` を末尾に追加します。追加された `NoteGroup` の添え字を返します。
   */
  addNoteGroup(group: NoteGroup, suggestedIndex?: number): number;

  /**
   * `Project` に `Track` を追加します。追加された `Track` の添え字を返します。
   */
  addTrack(track: Track): number;

  /**
   * `Project` の長さ (ブリック) を取得します。最長の `Track` の長さとして定義されています。
   */
  getDuration(): number;

  /**
   * このプロジェクトのファイルシステム上での絶対パスを取得します。
   */
  getFileName(): string;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * `id` が数値の場合, プロジェクトライブラリの `id` 番目の NoteGroup を取得します。`id` が文字列の場合, プロジェクトライブラリの中で `id` を UUID とする `NoteGroup` を取得します。そのような `NoteGroup` が存在しない場合は `undefined` を返します。
   */
  getNoteGroup(id: number | string): NoteGroup | undefined;

  /**
   * プロジェクトライブラリの NoteGroup の数を取得します。メイングループはカウントされず, `NoteGroupReference` の数とは無関係です。
   */
  getNumNoteGroupsInLibrary(): number;

  /**
   * トラックの数を取得します。
   */
  getNumTracks(): number;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * この `Project` の `TimeAxis` オブジェクトを取得します。
   */
  getTimeAxis(): TimeAxis;

  /**
   * 添え字が `index` の `Track` を取得します。添え字は表示順ではなく, ストレージ配置順となります。
   */
  getTrack(index: number): Track;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * この `Project` に新しい編集記録を追加する。ユーザが `Ctrl + Z` / `Ctrl + Y` を押したとき, 最後の編集記録に続くすべての編集が一緒に元に戻される / やり直されることを意味します。スクリプトの実行開始時に, 現在開いているプロジェクトに新しい編集記録が自動的に追加されます。
   */
  newUndoRecord(): void;

  /**
   * プロジェクトライブラリから `index` 番目の `NoteGroup` を削除します。`NoteGroup` を参照しているすべての `NoteGroupReference` も削除されます。
   */
  removeNoteGroup(index: number): void;

  /**
   * `Project` から `index` 番目の `Track` を削除します。
   */
  removeTrack(index: number): void;
}

/**
 * 選択状態のための基本的なインターフェース。
 */
interface SelectionStateBase {

  /**
   * この選択状態が対応しているすべてのオブジェクトタイプについて, 該当するオブジェクトの選択を解除します。選択に変更があった場合は真を返します。
   */
  clearAll(): boolean;

  /**
   * 選択されているものがあるかどうか確認します。
   */
  hasSelectedContent(): boolean;

  /**
   * 選択されたオブジェクトに未完了の編集があるかどうか確認します。例えば, ユーザがいくつかのノート / 制御点をドラッグしており, まだマウスを離していない場合, 真を返します。
   */
  hasUnfinishedEdits(): boolean;
}

/**
 * テンポと拍子記号を保存するプロジェクト単位のオブジェクトです。また, 物理的時間 (秒など) と音楽的時間 (4 分音符, ブリックなど) の間の変換にも使います。
 */
interface TimeAxis extends NestedObject {

  /**
   * `measure` 番目の小節に小節記号 `nomin` / `denom` を挿入します。`measure` 番目の小節に小節記号が存在する場合, それを更新します。
   */
  addMeasureMark(measure: number, nomin: number, denom: number): void;

  /**
   * テンポ記号 `bpm` を `b` (ブリック) の位置に挿入します。`b` の位置にテンポ記号がある場合, `BPM` を更新します。
   */
  addTempoMark(b: number, bpm: number): void;

  /**
   * 現在のオブジェクトの深いコピー。
   */
  clone(): TimeAxis;

  /**
   * この `TimeAxis` 内のすべての拍子記号を取得します。
   */
  getAllMeasureMarks(): Array<{

    /**
     * 拍子記号が置かれる小節の番号
     */
    position: number;

    /**
     * 拍子記号の位置 (ブリック) 
     */
    positionBlick: number;

    /**
     * 分子 (例: 3/4 拍子の場合は 3) 
     */
    numerator: number;

    /**
     * 分母 (例: 3/4 拍子の場合は 4) 
     */
    denominator: number;
  }>;

  /**
   * この `TimeAxis` 内のすべてのテンポ記号を取得します。
   */
  getAllTempoMarks(): Array<{

    /**
     * 拍子記号が置かれる小節の番号
     */
    position: number;

    /**
     * 拍子記号の位置 (ブリック) 
     */
    positionBlick: number;

    /**
     * 分子 (例: 3/4 拍子の場合は 3) 
     */
    numerator: number;

    /**
     * 分母 (例: 3/4 拍子の場合は 4) 
     */
    denominator: number;
  }>;

  /**
   * 物理的時間 `t` (秒) を音楽的時間 (ブリック) に変換します。
   */
  getBlickFromSeconds(t: number): number;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 位置 `b` (ブリック) の小節番号を取得します。
   */
  getMeasureAt(b: number): number;

  /**
   * measureNumber 小節の拍子記号を取得します。
   */
  getMeasureMarkAt(measureNumber: number): {

    /**
     * 拍子記号が置かれる小節の番号
     */
    position: number;

    /**
     * 拍子記号の位置 (ブリック) 
     */
    positionBlick: number;

    /**
     * 分子 (例: 3/4 拍子の場合は 3) 
     */
    numerator: number;

    /**
     * 分母 (例: 3/4 拍子の場合は 4) 
     */
    denominator: number;
  };

  /**
   * 位置 `b` (ブリック) で有効な拍子記号を取得します。
   */
  getMeasureMarkAtBlick(b: number): {

    /**
     * 拍子記号が置かれる小節の番号
     */
    position: number;

    /**
     * 拍子記号の位置 (ブリック) 
     */
    positionBlick: number;

    /**
     * 分子 (例: 3/4 拍子の場合は 3) 
     */
    numerator: number;

    /**
     * 分母 (例: 3/4 拍子の場合は 4) 
     */
    denominator: number;
  };

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 音楽的時間 `b` (ブリック) を物理的時間 (秒) に変換します。
   */
  getSecondsFromBlick(b: number): number;

  /**
   * 位置 `b` (ブリック) で有効なテンポ記号を取得します。
   */
  getTempoMarkAt(b: number): {

    /**
     * テンポ記号の位置 (ブリック) 
     */
    position: number;

    /**
     * テンポ記号の位置 (秒) 
     */
    positionSeconds: number;

    /**
     * このテンポ記号から次のテンポ記号まで有効な BPM
     */
    bpm: number;
  };

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * `measure` 番目の小節にある小節記号を削除します。`measure` 番目の小節に小節記号が存在する場合, 真を返します。
   */
  removeMeasureMark(measure: number): boolean;

  /**
   * 位置 `b` (ブリック) のテンポ記号を削除します。`b` の位置にテンポ記号がある場合, 真を返します。
   */
  removeTempoMark(b: number): boolean;
}

/**
 * `NoteGroupReference` の集まりです。また, `Track` はメイングループ (`NoteGroup`) も含みます。トラック内の最初の `NoteGroupReference` は常にメイングループを参照します。`Track` のデフォルトの歌声プロパティは, 最初の `NoteGroupReference` (メイングループ) により定義されます。
 */
interface Track extends NestedObject {

  /**
   * この `Track` に `NoteGroupReference` を追加し, その添え字を返します。開始位置についてソートされた状態を保持します。
   */
  addGroupReference(group: NoteGroupReference): number;

  /**
   * 現在のオブジェクトの深いコピー。
   */
  clone(): Track;

  /**
   * トラックの色を16進文字列として取得します。
   */
  getDisplayColor(): string;

  /**
   * 親 `Project` 内でのこのトラックの表示順位を取得します。トラックの表示順は, そのストレージインデックスとは異なる場合があります。トラックエリアで表示されるトラックの順番は, 常にこの表示順位をもとにしたものになります。
   */
  getDisplayOrder(): number;

  /**
   * `Track` の長さ (ブリック) を取得します。最後の `NoteGroupReference` の終了位置として定義されています。
   */
  getDuration(): number;

  /**
   * 添え字が `index` の `NoteGroupReference` を取得します。1 番目は常にメイングループです。その後にプロジェクトライブラリの `NoteGroup` への参照が続きます。開始位置について昇順でソートされています。
   */
  getGroupReference(index: number): NoteGroupReference;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * トラック名を取得します。
   */
  getName(): string;

  /**
   * この `Track` に含まれる `NoteGroupReference` の数を取得します。メイングループも数えられます。
   */
  getNumGroups(): number;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * レンダリングパネルに表示されるファイルに書き出すかどうか確認します。
   */
  isBounced(): boolean;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * この `Track` から `index` 番目の `NoteGroupReference` を削除します。
   */
  removeGroupReference(index: number): void;

  /**
   * `Track` をファイルに書き出すかどうか設定します。
   */
  setBounced(enabled: boolean): void;

  /**
   * `Track` の表示色を設定します (引数: 16進文字列) 。
   */
  setDisplayColor(colorStr: string): void;

  /**
   * `Track` の名前を設定します。
   */
  setName(name: string): void;
}

/**
 * ピアノロールの選択状態。
 */
// interface TrackInnerSelectionState extends NestedObject, SelectionStateBase, GroupSelection {
interface TrackInnerSelectionState extends NestedObject, SelectionStateBase {   //GroupSelection を削除（2026-03-30）

  /**
   * この選択状態が対応しているすべてのオブジェクトタイプについて, 該当するオブジェクトの選択を解除します。選択に変更があった場合は真を返します。
   */

  /**
   * すべての `NoteGroupReference` の選択を解除します。選択範囲に変更があれば真を返します。
   */
  clearGroups(): boolean;

  /**
   * すべての `Note` の選択を解除します。選択が変更された場合, 真を返します。
   */
  clearNotes(): boolean;

  /**
   * 現在のオブジェクトの, 親の中での添え字を取得します。
   */
  getIndexInParent(): number;

  /**
   * 親 `NestedObject` を取得します。現在のオブジェクトが親に付いていない場合, `undefined` を返します。
   */
  getParent(): NestedObject | undefined;

  /**
   * 選択された `NoteGroupReference` の配列を, 選択順にしたがって取得します。
   */
  getSelectedGroups(): Array<NoteGroupReference>;

  /**
   * 選択された `Note` の配列を, 選択順に取得します。
   */
  getSelectedNotes(): Array<Note>;

  /**
   * 選択されているものがあるかどうか確認します。
   */
  hasSelectedContent(): boolean;

  /**
   * `NoteGroupReference` が1つ以上選択されているか確認します。
   */
  hasSelectedGroups(): boolean;

  /**
   * 選択されている `Note` がひとつ以上あるかどうか確認します。
   */
  hasSelectedNotes(): boolean;

  /**
   * 選択されたオブジェクトに未完了の編集があるかどうか確認します。例えば, ユーザがいくつかのノート / 制御点をドラッグしており, まだマウスを離していない場合, 真を返します。
   */
  hasUnfinishedEdits(): boolean;

  /**
   * 現在のオブジェクトがメモリ管理されているかどうか (スクリプト環境によってガベージコレクションされるか) を確認します。
   */
  isMemoryManaged(): boolean;

  /**
   * 選択に `NoteGroupReference` を追加します。引数は, 現在開いているプロジェクトに含まれている必要があります。
   */
  selectGroup(reference: NoteGroupReference): void;

  /**
   * `Note` を選択します。ノートは, ピアノロールで開かれている `NoteGroupReference` の中になければなりません (`MainEditorView.getCurrentGroup` を参照) 。
   */
  selectNote(note: Note): void;

  /**
   * `NoteGroupReference` の選択を解除します。選択範囲に変更があれば真を返します。
   */
  unselectGroup(reference: NoteGroupReference): boolean;

  /**
   * `Note` の選択を解除します。選択が変更された場合, 真を返します。
   */
  unselectNote(note: Note): boolean;

  // ---  TrackInnerSelectionState の定義を追加（2026-03-30） ---
  /*
  選択状態変更時のコールバック
  */
  registerSelectionCallback(
    cb: (type: string, isSelected: boolean) => void
  ): void;

  /*
  選択クリア時のコールバック
  */
  registerClearCallback(
    cb: (type: string) => void
  ): void;

}


// --- WidgetValue（UI用の仮想オブジェクト）の型の追加（2026-03-30）---
interface WidgetValue {
  /*
  現在の値（Slider: number, TextBox: string, Button: boolean）
  */
  getValue(): any;
  setValue(v: any): void;

  /*
  有効/無効
  */
  setEnabled(v: boolean): void;

  /*
  値が変わったときのコールバック
  */
  setValueChangeCallback(cb: () => void): void;
}

// --- NoteAttributes の定義を追加（2026-03-30） ---
interface NoteAttributes {
  /*
  言語オーバーライド
  */
  languageOverride?: string;
}


// --- functionの定義（2026-03-30）---
/*
スクリプトのファイル情報
*/
declare function getClientInfo(): {
  name: string; //スクリプト名
  author: string; //作者名
  version?: string | number; //バージョン（文字列または数値）
  versionNumber?: number; //バージョン番号（数値）
  minEditorVersion: number; //最小エディタバージョン（数値）
  type?: SidePanelSection; //スクリプトの種類
  category?: string; //スクリプトのカテゴリ
};

/*
多言語対応（日本語への翻訳はlangCode == "ja-jp"）
*/
declare function getTranslations(
  langCode: string  //言語コード
): Array<[string, string]>;  // [表示名, 翻訳後文字列]


// ---- SidePanelSection UI ----

declare interface SidePanelSection {
  title: string;
  rows: Row[];
}

type Row =
  | ContainerRow  // コンテナ
  | LabelRow;     // ラベル

interface LabelRow {
  type: "Label";
  text: string; // 表示名
}

interface ContainerRow {
  type: "Container";
  columns: Widget[]; // ウィジェットの配列
}

// -------------------------------
// Widget 共通
// -------------------------------
interface BaseWidget {
  // type: string; // ウィジェットの種類 （型推論で判別できるため不要）
  width?: number; // 幅
}

// -------------------------------
// Button
// -------------------------------
interface ButtonWidget extends BaseWidget {
  type: "Button";
  text: string;
  value: any; // WidgetValue or function
}

// -------------------------------
// Slider
// -------------------------------
interface SliderWidget extends BaseWidget {
  type: "Slider";
  text: string; // 表示名
  format: string; // フォーマット
  minValue: number; // 最小値
  maxValue: number; // 最大値
  interval: number; // インターバル
  value: WidgetValue; // 値
}

// -------------------------------
// ComboBox
// -------------------------------
interface ComboBoxWidget extends BaseWidget {
  /*
  プルダウンメニュー
  */
  type: "ComboBox";
  choices: string[]; // 選択肢
  value: WidgetValue; // 値
}

// -------------------------------
// CheckBox
// -------------------------------
interface CheckBoxWidget extends BaseWidget {
  /*
  チェックボックス
  */
  type: "CheckBox";
  text: string; // 表示名
  value: WidgetValue; // 値
}

// -------------------------------
// TextArea
// -------------------------------
interface TextAreaWidget extends BaseWidget {
  /*
  テキストエリア
  */
  type: "TextArea";
  value: WidgetValue; // 値
  height: number; // 高さ
}

// -------------------------------
// TextBox
// -------------------------------
interface TextBoxWidget extends BaseWidget {
  /*
  テキストボックス
  */
  type: "TextBox";
  value: WidgetValue; // 値
  readOnly?: boolean; // 読み取り専用
}

// -------------------------------
// WidgetValue
// -------------------------------
interface WidgetValue {
  /*
  値を取得する
  */
  getValue(): any;
  /*
  値を設定する
  */
  setValue(v: any): void;
  /*
  値が変わったときのコールバックを設定する
  */
  setValueChangeCallback(cb: () => void): void;
  /*
  有効/無効を設定する
  */
  setEnabled?(enabled: boolean): void;
}

// -------------------------------
// Widget Union
// -------------------------------
type Widget =
  | ButtonWidget  // ボタン
  | SliderWidget  // スライダー
  | ComboBoxWidget  // プルダウンメニュー
  | CheckBoxWidget  // チェックボックス
  | TextAreaWidget  // テキストエリア
  | TextBoxWidget;  // テキストボックス
