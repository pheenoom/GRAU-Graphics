#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

void main()
{
    vec2 tauler = vtexCoord * 8.0;
    if (int(mod(tauler.s, 2.0)) != int(mod(tauler.t, 2.0))) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
    else {    
        fragColor = vec4(0.8, 0.8, 0.8, 1.0);
    }
}
