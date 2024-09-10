{
  description = "Python development";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs =
    { nixpkgs
    , flake-utils
    , ...
    }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ ];
      };
    in
    {
      devShell = pkgs.mkShell {
        buildInputs = with pkgs; [
          taplo
          (python3.withPackages (ps: with ps; [
            python-lsp-server
            flake8
            black
          ]))
        ];
        shellHook = ''
        '';
      };

    });
}
